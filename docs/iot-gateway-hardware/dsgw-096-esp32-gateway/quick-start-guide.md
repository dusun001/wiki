# DSGW-096 Quick Start Guide


## 1. Download the SDK

*ESP32-WROOM-32UE gateway board BSP (Board Support Package), based on ESP-IDF v5.4 and built with Docker.* <br />
- [Download the SDK URL](https://drive.google.com/file/d/1G7cB0I7D6W43VKlvhcHFUR_ATqKLDfKl/view?usp=drive_link)

## 2. Project Overview

DSGW-096, based on ESP32, is designed for smart home systems, the intelligent security industry, and pension service applications. <br />
It supports multiple protocols, including Bluetooth 5.2(OR Zigbee 3.0), and Wi-Fi 2.4G, making it an ideal choice for IoT applications requiring the integration of a wide variety of devices and sensors. For example, it can collect data from various end devices (such as Bluetooth smart locks, Zigbee sensors, or medical sensors). <br />

- Processor: ESP32<br />
- OS: FreeRTOS<br />
- USB 5V/2A type-C power supply<br />
- Supports IEEE802.11n, IEEE802.11g, IEEE 802.11b protocol<br />
- Supports Wi-Fi2.4, Zigbee 3.0, OR Bluetooth 5.2<br />
- One WAN/LAN 100Mbps variable network port<br />

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-096/qsg1.png)

## 3. Default Power-On State

After power-on, app\_main() performs the following steps in order without manual intervention:<br />

| **Step** | **Module** | **Power-On Behavior** | **Description** |
| --- | --- | --- | --- |
| 1 | bsp\_board | Basic configuration | Initialize GPIO |
| 2 | bsp\_i2c | Start the I2C1 bus | 400kHz, SCL=GPIO14, SDA=GPIO13 |
| 3 | bsp\_xl9555 | Initialize the I/O expander | Configure port directions; turn off all LEDs |
| 4 | bsp\_rtc | Initialize RTC and synchronize system time | Read the PCF85063 clock and synchronize ESP32 system time with settimeofday(). Skip this step if the RTC is not populated (DNP). |
| 5 | BLE/Zigbee RST | Set reset pins high | Release reset via XL9555 P1\_7 (BLE) and GPIO5 (Zigbee) |
| 6 | bsp\_led | LED startup sequence | Turn on PWR, NET, and WIRELESS in sequence; then turn off NET and WIRELESS, leaving PWR on. |
| 7 | bsp\_cmd | Start serial command line | Accept commands on UART0 |
| 8 | bsp\_button | Initialize button | Use SOFT\_RST (XL9555 P1\_5) as a button input; supports single, double, and triple clicks and long presses. |
| 9 | bsp\_eth | Initialize Ethernet automatically | An asynchronous task starts YT8522H in RMII mode and obtains an IP address via DHCP. |
| 10 | bsp\_wifi | Start Wi-Fi AP mode | SSID: DSGW092; password: 12345678; channel: 1 |

**Networks available after power-on:** <br />
-   Ethernet: DHCP starts automatically. No IP address is assigned if the cable is disconnected or DHCP fails.<br />
-   Wi-Fi AP: Phones and computers can connect to the DSGW092 hotspot. The default AP gateway is 192.168.4.1.<br />

**Button functions (SOFT\_RST):** <br />

| **Action** | **Function** |
| --- | --- |
| Single click | Print a button event |
| Double click | Print a button event |
| Triple click | Restart the system (esp\_restart()) |
| Hold for 5 s | Print a long-press event |
| Hold for 10 s | Print a long-press event |

*The R2 (100R) resistor for the SOFT\_RST button has been disconnected. The button serves only as a GPIO input and does not trigger an ESP32 hardware reset.* <br />

## 4. Directory Structure

```
dsgw092/
├── dsgw-092-2/             # Schematics and hardware documentation
│   ├── docs/
│   │   ├── 130_V0.0_5-1-9-014820.pdf   # Mainboard schematic
│   │   └── XL9555.pdf                  # XL9555 datasheet
│   └── README.md           # Hardware pins and peripherals
├── docker_bsp/             # BSP project
│   ├── build.sh            # Docker build script
│   ├── CMakeLists.txt      # Top-level CMake file
│   ├── sdkconfig.defaults  # Persistent SDK settings (16 MB flash, RMII clock, etc.)
│   ├── out/                # Build output (generated automatically)
│   │   ├── bootloader.bin
│   │   ├── partition-table.bin
│   │   └── docker_bsp.bin
│   └── main/
│       ├── main.c          # Main entry point and command registration
│       ├── CMakeLists.txt  # Component CMake file
│       ├── bsp_board/      # Board-level pin definitions
│       ├── bsp_i2c/        # I2C bus driver
│       ├── bsp_xl9555/     # I/O expander driver
│       ├── bsp_led/        # LED control (active-low)
│       ├── bsp_cmd/        # Serial command line
│       ├── bsp_uart/       # UART1/UART2 driver
│       ├── bsp_ble/        # BLE module driver
│       ├── bsp_zigbee/     # Zigbee module driver
│       ├── bsp_rtc/        # RTC driver (PCF85063ATT)
│       ├── bsp_button/     # Button driver (interrupt and state machine)
│       ├── bsp_wifi/       # Wi-Fi STA/AP driver
│       └── bsp_eth/        # Ethernet driver (YT8522H, RMII)
└── tools/
    ├── esp32_flash_gui.py  # Flashing GUI source
    └── dist/
        └── ESP32_FlashTool.exe  # Packaged standalone executable
```

## 5. Hardware Pin Mapping

### 5.1 I2C Bus (I2C1)

| **Signal** | **GPIO** | **Description** |
| --- | --- | --- |
| I2C1\_SCL | IO14 | 400kHz |
| I2C1\_SDA | IO13 | (Schematic IO15 changed to IO13 via a 0R resistor) |

### 5.2 I2C Device Addresses

| **Device** | **Reference Designator** | **I2C Address** | **Description** |
| --- | --- | --- | --- |
| XL9555 | U4 | 0x20 | 16-bit I/O expander |
| PCF85063ATT | U7 | 0x51 | RTC (not populated, DNP) |

### 5.3 UART

| **UART** | **Purpose** | **TX** | **RX** | **RTS** | **CTS** | **Baud Rate** |
| --- | --- | --- | --- | --- | --- | --- |
| UART0 | Debug console | IO1 | IO3 | \- | \- | 115200 |
| UART1 | BLE module (U6) | IO33 | IO34 | IO15 | IO16 | 500000 |
| UART2 | Zigbee module (M1) | IO17 | IO35 | IO4 | IO32 | 115200 |

*UART1 and UART2 both use hardware flow control (CTS/RTS). Their pins connect to the modules through 33R series resistors.* <br />

### 5.4 XL9555 I/O Assignment

| **Port** | **Pin** | **Signal** | **Direction** | **Description** |
| --- | --- | --- | --- | --- |
| P0\_5 | 5 | WIRELESS\_LED | Output | Wireless LED (active-low) |
| P0\_6 | 6 | NETWORK\_LED | Output | Network LED (active-low) |
| P0\_7 | 7 | PWR\_LED | Output | Power LED (active-low) |
| P1\_5 | 5 | SOFT\_RST | Input | Button input (R2 disconnected; cannot trigger reset) |
| P1\_6 | 6 | RTC\_INT\_N | Input | RTC interrupt (DNP) |
| P1\_7 | 7 | BLE\_nRESET | Output | BLE reset (active-low) |

### 5.5 Ethernet PHY (YT8522H)

| **Signal** | **GPIO** | **Description** |
| --- | --- | --- |
| RMII\_CLK | IO0 | 50 MHz output (ESP32 to PHY via U3 buffer) |
| MDIO | IO18 | SMI data |
| MDC | IO23 | SMI clock |
| PHY\_RSTN | IO12 | PHY reset (R60 removed; controlled by the driver) |
| TXD0 | IO19 | RMII transmit data 0 |
| TXD1 | IO22 | RMII transmit data 1 |
| TXEN | IO21 | RMII transmit enable |
| RXD0 | IO25 | RMII receive data 0 |
| RXD1 | IO26 | RMII receive data 1 |
| RXDV | IO27 | RMII CRS\_DV |

***YT8522H RMII mode: Hardware strapping on PHY pin 8 (RX\_DV) is sampled as MII mode because the EMAC driver occupies GPIO27. Before esp\_eth\_start(), the code writes 0x0012 to extended register 0x4000 (bit 4 = RXDV\_SEL; bit 1 = RMII\_EN) to override this in software and select RMII mode.*** <br />

### 5.6 Other Control Pins

| **Signal** | **GPIO** | **Description** |
| --- | --- | --- |
| ZIGBEE\_nRESET | IO5 | Zigbee module reset (active-low) |

## 6. BSP Module Interfaces

### 6.1 bsp\_board - Board Definitions

Board initialization entry point and the single source of all pin definitions. <br />

```
#include "bsp_board.h"
int bsp_board_init(void);
```

### 6.2 bsp\_i2c - I2C Bus Driver

Based on the ESP-IDF I2C master driver (driver/i2c\_master.h). <br />

```
#include "bsp_i2c.h"
int bsp_i2c_init(void);
int bsp_i2c_write_reg(uint8_t dev_addr, uint8_t reg, const uint8_t *data, size_t len);
int bsp_i2c_read_reg(uint8_t dev_addr, uint8_t reg, uint8_t *buf, size_t len);
int bsp_i2c_write_byte(uint8_t dev_addr, uint8_t reg, uint8_t val);
int bsp_i2c_read_byte(uint8_t dev_addr, uint8_t reg, uint8_t *val);
int bsp_i2c_probe(uint8_t dev_addr);
```

### 6.3 bsp\_xl9555 - I/O Expander

XL9555 16-bit I2C I/O expander (address 0x20). <br />

```
#include "bsp_xl9555.h"
int bsp_xl9555_init(void);
int bsp_xl9555_set_pin(int port, int pin, int val);
int bsp_xl9555_get_pin(int port, int pin, int *val);
int bsp_xl9555_dump_regs(void);
```

### 6.4 bsp\_led - LED Control

Three LEDs are driven by the XL9555 and NPN transistors; they turn on at a low logic level (active-low).  <br />

```
#include "bsp_led.h"
typedef enum {
    BSP_LED_PWR = 0,      // P0_7, green
    BSP_LED_NET,          // P0_6
    BSP_LED_WIRELESS,     // P0_5
} bsp_led_t;
int bsp_led_init(void);               // Initialize; all LEDs off (outputs high)
int bsp_led_on(bsp_led_t led);        // Turn on (output low)
int bsp_led_off(bsp_led_t led);       // Turn off (output high)
int bsp_led_toggle(bsp_led_t led);    // Toggle
int bsp_led_get_state(bsp_led_t led); // Get state (1=ON, 0=OFF)
```

### 6.5 bsp\_cmd - Serial Command Line

A lightweight custom command line on UART0 with no external dependencies. <br />

```
#include "bsp_cmd.h"
typedef int (*bsp_cmd_func_t)(int argc, char **argv);
typedef struct { const char *command; const char *help; bsp_cmd_func_t func; } bsp_cmd_t;
int bsp_cmd_init(void);
int bsp_cmd_register(const bsp_cmd_t *cmd);
```

### 6.6 bsp\_uart - UART Driver

A unified driver for UART1 (BLE) and UART2 (Zigbee), supporting hardware flow control, an RX ring buffer, and AT command exchange. <br />

```
#include "bsp_uart.h"
typedef enum { BSP_UART_BLE = 1, BSP_UART_ZIGBEE = 2 } bsp_uart_port_t;
int bsp_uart_init(bsp_uart_port_t port);
int bsp_uart_send(bsp_uart_port_t port, const uint8_t *data, size_t len);
int bsp_uart_send_str(bsp_uart_port_t port, const char *str);
int bsp_uart_recv(bsp_uart_port_t port, uint8_t *buf, size_t maxlen);
int bsp_uart_recv_line(bsp_uart_port_t port, char *buf, size_t maxlen, uint32_t timeout_ms);
int bsp_uart_at_command(bsp_uart_port_t port, const char *cmd, char *resp, size_t resp_len, uint32_t timeout_ms);
void bsp_uart_flush(bsp_uart_port_t port);
```

### 6.7 bsp\_ble - BLE Module Driver

The BLE module (U6) communicates over UART1. Reset is controlled by XL9555 P1\_7 (active-low). <br />

```
#include "bsp_ble.h"
int bsp_ble_init(void);
int bsp_ble_at_command(const char *cmd, char *resp, size_t resp_len, uint32_t timeout_ms);
int bsp_ble_send(const uint8_t *data, size_t len);
int bsp_ble_recv(uint8_t *buf, size_t maxlen);
int bsp_ble_reset(void);
bool bsp_ble_is_ready(void);
```

### 6.8 bsp\_zigbee - Zigbee Module Driver

The Zigbee module (M1) communicates over UART2. Reset is controlled by ESP32 GPIO5 (active-low). <br />

```
#include "bsp_zigbee.h"
int bsp_zigbee_init(void);
int bsp_zigbee_at_command(const char *cmd, char *resp, size_t resp_len, uint32_t timeout_ms);
int bsp_zigbee_send(const uint8_t *data, size_t len);
int bsp_zigbee_recv(uint8_t *buf, size_t maxlen);
int bsp_zigbee_reset(void);
bool bsp_zigbee_is_ready(void);
```

### 6.9 bsp\_rtc - RTC Driver

PCF85063ATT real-time clock (U7), I2C address 0x51. <br />

***Note: RTC components U7, Y2, R96, and R97 are all DNP (not populated). The code is ready for use once they are installed. Initialization is attempted automatically at power-on and skipped if the RTC is absent.*** <br />

```
#include "bsp_rtc.h"
typedef struct {
    uint16_t year; uint8_t month; uint8_t day;
    uint8_t weekday; uint8_t hour; uint8_t minute; uint8_t second;
} rtc_time_t;
int bsp_rtc_init(void);
int bsp_rtc_set_time(const rtc_time_t *time);
int bsp_rtc_get_time(rtc_time_t *time);
bool bsp_rtc_is_present(void);
bool bsp_rtc_is_running(void);
int bsp_rtc_set_alarm(int hour, int minute, int day, int weekday);  // -1 = ignore
int bsp_rtc_clear_alarm(void);
int bsp_rtc_enable_alarm_int(void);
int bsp_rtc_disable_alarm_int(void);
int bsp_rtc_read_ram(uint8_t *val);
int bsp_rtc_write_ram(uint8_t val);
```

### 6.10 bsp\_button - Button Driver

SOFT\_RST button (XL9555 P1\_5, input mode), driven by interrupts and a state machine. <br />

```
#include "bsp_button.h"
typedef enum {
    BTN_EVENT_SINGLE_CLICK = 0,
    BTN_EVENT_DOUBLE_CLICK,
    BTN_EVENT_TRIPLE_CLICK,
    BTN_EVENT_LONG_PRESS_5S,
    BTN_EVENT_LONG_PRESS_10S,
} btn_event_t;
typedef void (*btn_callback_t)(btn_event_t event);
int bsp_button_init(void);                    // Initialize automatically
int bsp_button_register(btn_callback_t cb);   // Register event callback
int bsp_button_status(void);                  // Print button status
```

### 6.11 bsp\_wifi - Wi-Fi Driver

ESP32 built-in Wi-Fi supports STA and AP modes. <br />

```
#include "bsp_wifi.h"
int bsp_wifi_init(void);                                          // Initialize (including NVS)
int bsp_wifi_sta(const char *ssid, const char *password);         // Connect to an AP in STA mode
int bsp_wifi_ap(const char *ssid, const char *password, uint8_t channel);  // AP mode
int bsp_wifi_stop(void);                                          // Stop Wi-Fi
int bsp_wifi_info(void);                                          // Print status
int bsp_wifi_mac(void);                                           // Print MAC address
```

***Note: bsp\_wifi\_init() calls nvs\_flash\_init() internally, so NVS does not need separate initialization. AP and STA modes are mutually exclusive.*** <br />

### 6.12 bsp\_eth - Ethernet Driver

YT8522H PHY in RMII mode at PHY address 0x01, using the ESP-IDF generic PHY driver. <br />

```
#include "bsp_eth.h"
int bsp_eth_init(void);                                // Initialize (DHCP)
int bsp_eth_stop(void);                                // Stop
int bsp_eth_info(void);                                // Print link/IP/DHCP status
int bsp_eth_set_static(uint32_t ip, uint32_t mask, uint32_t gw);  // Static IP
int bsp_eth_set_dhcp(void);                            // Switch back to DHCP
int bsp_eth_phy_read(uint32_t reg);                    // Read PHY register (hex)
int bsp_eth_phy_write(uint32_t reg, uint32_t value);   // Write PHY register (hex)
```

***YT8522H RMII mode: At power-on, software forces RMII mode through extended register 0x4000 = 0x0012 because the EMAC interferes with hardware strapping.*** <br />

## 7. Serial Command Reference

Connect to the debug serial port (UART0, 115200, 8N1) and enter commands to interact with the device.<br />

### 7.1 Basic Commands

| **Command** | **Description** | **Example** |
| --- | --- | --- |
| `help` | Display all commands | `help` |
| `version` | Display board and firmware information | `version` |

### 7.2 I2C / I/O Expander

| **Command** | **Description** | **Example** |
| --- | --- | --- |
| `i2c scan` | Scan devices on the I2C bus | `i2c scan` |
| `i2c read <addr> <reg>` | Read an I2C register (hexadecimal) | `i2c read 20 06` |
| `xl9555 read` | Print all XL9555 registers | `xl9555 read` |
| `xl9555 set <port> <pin> <0\|1>` | Set an XL9555 output | `xl9555 set 0 7 1` |

### 7.3 LED

| **Command** | **Description** | **Example** |
| --- | --- | --- |
| led <pwr\|net\|wf> <on\|off\|toggle> | Control an LED (active-low) | led pwr on |

### 7.4 BLE

| **Command** | **Description** | **Example** |
| --- | --- | --- |
| `ble_init` | Initialize the BLE NCP | `ble_init` |
| `ble_info` | Display version and status | `ble_info` |
| `ble_debug <0\|1>` | Toggle runtime debugging | `ble_debug 1` |
| `ble_scan <start\|stop>` | Control scanning | `ble_scan start` |
| `ble_connect <addr> <type>` | Connect to a device | `ble_connect A0:B1:C2:D3:E4:F5 0` |
| `ble_disconnect <handle>` | Disconnect | `ble_disconnect 0` |
| `ble_conn_param <handle> <min> <max> <lat> <timeout>` | Set connection parameters | `ble_conn_param 0 24 40 0 500` |
| `ble_tx_power <handle> <power>` | Set connection TX power | `ble_tx_power 0 80 (8.0dBm)` |
| `ble_disc_svc <handle>` | Discover services | `ble_disc_svc 0` |
| `ble_disc_char <handle> <service>` | Discover characteristics | `ble_disc_char 0 1` |
| `ble_read <handle> <char>` | Read a characteristic value | `ble_read 0 3` |
| `ble_write <handle> <char> <hex...>` | Write a characteristic value | `ble_write 0 3 0102` |
| `ble_notify <handle> <char> <on\|off>` | Enable or disable notifications | `ble_notify 0 3 on` |
| `ble_indicate <handle> <char> <on\|off>` | Enable or disable indications | `ble_indicate 0 3 on` |
| `ble_adv <start\|stop>` | Control advertising | `ble_adv start` |
| `ble_adv_data <hex...>` | Set advertising data | `ble_adv_data 020106` |
| `ble_adv_interval <min> <max>` | Set advertising interval (ms) | `ble_adv_interval 100 200` |
| `ble_sys_power <min> <max>` | Set system power (0.1 dBm) | `ble_sys_power -30 80` |
| `ble_dtm_tx_cw <pkt_type> <ch> <phy> <power>` | DTM unmodulated carrier transmission | `ble_dtm_tx_cw 0xfe 0 1 100` |
| `ble_dtm_rx <ch> <phy>` | DTM reception | `ble_dtm_rx 0 1` |
| `ble_dtm_stop` | Stop DTM | `ble_dtm_stop` |

### 7.5 Zigbee

```
ezsp_init              # Initialize EZSP stack (NCP hardware reset, RSTACK handshake, VERSION handshake)
ezsp_info              # Query EUI64, Node ID, and network status
ezsp_stats             # View ASH protocol counters
```

### 7.6 RTC

| **Command** | **Description** | **Example** |
| --- | --- | --- |
| `rtc init` | Initialize RTC (detect and configure) | `rtc init` |
| `rtc get` | Read RTC time | `rtc get` |
| `rtc set <Y M D h m s wday>` | Set RTC time | `rtc set 2026 8 20 14 30 0 4` |
| `rtc probe` | Check whether RTC is present | `rtc probe` |

*At power-on, the RTC initializes automatically and synchronizes system time; manual action is usually unnecessary.* <br />

### 7.7 Button

| **Command** | **Description** | **Example** |
| --- | --- | --- |
| `button init` | Reinitialize the button | `button init` |
| `button status` | Print button status | `button status` |

*The button initializes automatically at power-on. A triple click restarts the system.* <br />

### 7.8 WiFi

| **Command** | **Description** | **Example** |
| --- | --- | --- |
| `wifi init` | Initialize the Wi-Fi subsystem | `wifi init` |
| `wifi sta <ssid> [pass]` | Connect to an AP in STA mode | `wifi sta MyWiFi mypassword` |
| `wifi ap <ssid> [pass] [ch]` | Start softAP | `wifi ap DSGW092 12345678 1` |
| `wifi off` | Stop Wi-Fi | `wifi off` |
| `wifi info` | Display Wi-Fi status | `wifi info` |
| `wifi mac` | Display MAC address | `wifi mac` |

*AP mode starts automatically at power-on (SSID: DSGW092; password: 12345678).* <br />

## 8. Build Instructions

### 8.1 Prerequisites

-   Docker Desktop is installed.<br />
-   The Docker service is running.<br />

### 8.2 Build Steps

```
cd docker_bsp
bash build.sh
build.sh automatically performs the following steps:
```

1.  Pull the espressif/idf:release-v5.4 Docker image.<br />
2.  Run idf.py set-target esp32 build in the container (on the first build or after clean).<br />
3.  Copy the flashing files to docker\_bsp/out/.<br />

### 8.3 Build Output

```
docker_bsp/out/
├── bootloader.bin         # Bootloader
├── partition-table.bin    # Partition table
├── docker_bsp.bin         # Application firmware
└── flash_command.txt      # Command-line flashing reference
```

### 8.4 Flash Addresses

| **File** | **Flash Address** |
| --- | --- |
| bootloader.bin | 0x1000 |
| partition-table.bin | 0x8000 |
| docker\_bsp.bin | 0x10000 |

### 8.5 sdkconfig.defaults

Nondefault settings are stored in sdkconfig.defaults so set-target does not overwrite them:<br />

```
Flash: 16MB + partitions_singleapp_large.csv
ETH: RMII with a 50 MHz clock output on GPIO0
FreeRTOS: trace facility (required by the ps command)
```

## 9. Flashing Instructions

### 9.1 Method 1: GUI Flashing Tool (Recommended)

Use the packaged standalone executable; no Python installation is required.<br />

**Tool location: tools/dist/ESP32\_FlashTool.exe** <br />

**Procedure:** <br />
1.  Connect the ESP32 to the computer with a USB cable.<br />
2.  Double-click ESP32\_FlashTool.exe.<br />
3.  The tool automatically detects firmware in docker\_bsp/out/.<br />
4.  Select the serial port and baud rate (default: 921600).<br />
5.  Enter download mode:Hold BOOT, press and release RST, then release BOOT.<br />
6.  Click Flash to start flashing.<br />
7.  After flashing completes, press RST to restart the device.<br />

### 9.2 Method 2: Command-Line esptool

```
# Flash all three files
esptool --chip esp32 --port COM3 --baud 921600 \
  write_flash 0x1000 bootloader.bin \
  0x8000 partition-table.bin \
  0x10000 docker_bsp.bin
# Update the application only (routine debugging)
esptool --chip esp32 --port COM3 --baud 921600 \
  write_flash 0x10000 docker_bsp.bin
```

*Replace COM3 with the actual serial port. esptool issues a hard reset automatically after flashing.*<br />

### 9.3 Troubleshooting Flashing Failures

1.  Lower the baud rate to 460800 or 115200. <br />
2.  Check GPIO12 (MTDI): The R58 pull-up resistor must be removed; otherwise flash power switches to 1.8 V and communication fail. <br />
3.  Check power: Make sure the USB cable carries both data and power. <br />
4.  Check download mode: Follow the correct BOOT and RST sequence. <br />

## 10. Download interface description

The interface for downloading ESP32 chip is UART, and the interface for downloading nRF52840 is SWD.<br />

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-096/qsg2.png)

