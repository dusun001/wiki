
## Hardware Specification

**Product** **Na****me: i.MX8M** **Mini** **Core Board** 

**Product Model:** **DSOM-****07****0N** 

Revision History

| Specification | Sect.      | Update Description | By                  |          |
| ------------- | ---------- | ------------------ | ------------------- | -------- |
| Rev.          | Date       |                    |                     |          |
| 1.0           | 2023-12-14 |                    | New version release | Lilinghe |
|               |            |                    |                     |          |
|               |            |                    |                     |          |
|               |            |                    |                     |          |
|               |            |                    |                     |          |
|               |            |                    |                     |          |
|               |            |                    |                     |          |
|               |            |                    |                     |          |
|               |            |                    |                     |          |

Approvals

| Organization | Name | Title | Date |
| ------------ | ---- | ----- | ---- |
|              |      |       |      |
|              |      |       |      |
|              |      |       |      |



 



 

# 1.  Product Description

## 1.1.  Product Overview and Scope

The i. MX8M Mini Core board uses the NXP quad-core Cortex-A53 processor with a high-performance frequency of 1.8GHz and one Cortex-M4 CPU operating up to 400 MHz. NXP's i The MX 8M Mini application processor has excellent media capabilities, suitable for rich media consumers and embedded industrial applications.

The DSOM-170N Core Board offers a wide range of development documents and software resources that are both free and open-source. This convenience enables developers to enhance their efficiency and shorten the development cycle.

## 1.2.  Features

l Featuring a compact form factor and sufficient GPIO interfaces

l Size 60mm*49mm，board to board connector

l With VPU and GPU

l Rich extension interfaces, supporting PCIE2.0, Gigabit Ethernet, SAI, I2C, UART, SDIO3.0, MIPI-CSI, MIPI-DSI, SPDIF, USB2.0, SPI, etc.

l eMMC up to 16GB

l RAM up to 2GB

l 8-layer board to board connector, produced by sinking gold technology, independent grounding signal layer, lead-free

l Leads out 200 PIN pins, including almost all CPU pins.

l RoHS certified

## 1.3.  Application

l Camera video monitoring

l two-way video conference

l visual doorbell

l image analysis

l home display

l wireless or networked speakers

l home appliance system control 

l sound amplification device system

# 2.  System Block Diagram

## 2.1.  Main Chip Block Diagram

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image002.jpg)

## 2.2.  Core Board Compatible CPU Model

The compatible CPU models of the core board are shown in the table below, and our company has chosen the model of MIMX8MM6CVTKZAA.



| **Part number** | **Device description** | **Part differentiator  description** | **Number  of A53 Cores** | **A53**  **speed** | **Temperatu  re Tj (℃)** |
| --------------- | ---------------------- | ------------------------------------ | ------------------------ | ------------------ | ------------------------ |
| MIMX8MM6DVTLZAA | i.MX 8M Mini Quad      | M4, GPU, VPU                         | 4                        | 1.8 GHz            | 0~+95                    |
| MIMX8MM5DVTLZAA | i.MX 8M Mini Quad Lite | M4, GPU                              | 4                        | 1.8 GHz            | 0~+95                    |
| MIMX8MM4DVTLZAA | i.MX 8M Mini  Dual     | M4, GPU                              | 2                        | 1.8 GHz            | 0~+95                    |
| MIMX8MM6CVTKZAA | i.MX 8M Mini Quad      | M4, GPU, VPU                         | 4                        | 1.6 GHz            | -40~+105                 |
| MIMX8MM5CVTKZAA | i.MX 8M Mini Quad Lite | M4, GPU                              | 4                        | 1.8 GHz            | -40~+105                 |
| MIMX8MM4CVTKZAA | i.MX 8M Mini Dual      | M4, GPU, VPU                         | 2                        | 1.8 GHz            | -40~+105                 |

 

 

 

 

 

 

 

 

 



| **Item**                            | **Parameter**                                                |
| ----------------------------------- | ------------------------------------------------------------ |
| CPU                                 | Quad Cortex-A53 processors operation up to 1.6 GHz  Cortex-M4 CPU operating up to 400 MHz |
| GPU                                 | •  GCNanoUltra for 3D acceleration  • GC320 for  2D acceleration |
| VPU                                 | Video Decode   • 1080p60 VP9 Profile 0, 2 (10-bit)  • 1080p60 HEVC/H.265 Decoder  • 1080p60 AVC/H.264 Baseline, Main, High decoder  • 1080p60 VP8  • 1080p60 AVC/H.264 Encoder  • TrustZone support |
| RAM                                 | 2GB（1GB/4GB  optional）                                     |
| Storage                             | eMMC 16 GB  (8GB / 16GB / 32GB eMMC optional)                |
| Operating  Voltage                  | Typical  voltage 5V/2.1A                                     |
| OS                                  | Linux  5.4.3/Linux 4.14.98                                   |
| Temperature                         | Operating  Temperature: -40 °C ~75 °C                        |
| Storage  Temperature: -40 °C ~85 °C |                                                              |
| Humidity                            | 10~90%(Non-condensing)                                       |
| Barometric Pressure                 | 76Kpa  ~106Kpa                                               |
| Size                                | 60mm×49mm x 1.2mm                                            |

# 3.  Basic Parameters and Interfaces



| **Item** | **Parameter**                                                |
| -------- | ------------------------------------------------------------ |
| USB 2.0  | 2 X USB2.0 OTG                                               |
| PCIE     | 1 X PCIE, Supports 1-way PCI Express Gen2.0                  |
| MIPI CSI | 1 X MIPI CSI，Provide a four-lane  MIPI camera serial interfaces, capable of operating up to 1.5 Gbps |
| MIPI DSI | 1 X MIPI DSI，Provide a four-lane  MIPI display serial interface, capable of operating up to 1.5 Gbps  • 1080 p60 |
| Ethernet | 1 X 10/100/1000Mbps PHY                                      |
| SDIO     | 2 X SDIO                                                     |
| UART     | 4 X UART , The maximum supported baud rate is 4Mbp           |
| SPI      | 3 X SPI , the master-slave mode can be configured            |
| I2C      | 3 X I2C, The maximum speed supported in standard mode is 100Kbit/s;  The maximum supported speed in fast mode is 320Kbit/s |
| SAI      | 5 X SAI, supporting I2S, AC97, TDM, codec/DSP, and DSD interfaces,  including one SAI with 8 Tx and 8 Rx lanes, one SAI with 4 Tx and 4 Rx lanes,  two SAI with 2 Tx and 2 Rx lanes, and one SAI with 1 Tx and 1Rx lane. Support  over 20 channels of audio subject to I/O limitations |
| SPDIF    | 1 X SPDIF，A standard  audio file transfer format, developed jointly by the Sony and Phillips  corporations. It supports Transmitter and Receiver functionality. |
| PWM      | 4 X PWM，The  pulse-width modulator (PWM) has a 16-bit counter and is optimized to generate  sound from stored sample audio images. It can also generate tones. It uses  16-bit resolution and a 4x16 data FIFO to generate sound. |
| QSPI     | 1 X QSPI，Already  occupied by the core board, connected to 32MB of Nor Flash |
| Upgrade  | supports local firmware upgrades via USB interface           |

 

 

 

 

 

 

 

 

 

 

 

 

  

 

Note: The parameters in the table are hardware design or CPU theoretical values.

 

# 4.  Pin Definition

     ![图层 1](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image004.gif)

**Top Side Coreboard**

**![图层 2](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image006.gif)**

**Buttom Side Coreboard**

## 4.1.  Schematic diagram of core board pins

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image008.jpg)

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image010.jpg)

## 4.2.  Function Description of core board pins



| **Part  reference** | **Num**       | **S****ignal name** | **Default function**                             | **Default Function Description** | **Vol** | **IO** | **Ball**                                                     | **note****s**                                                |
| ------------------- | ------------- | ------------------- | ------------------------------------------------ | -------------------------------- | ------- | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| J1                  | 1             | UART3_RTS           | GPIO                                             | GPIO5_IO09                       | 3.3V    | I/O    | B6                                                           | Default  configuration as input, internal dropdown           |
| 2                   | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 3                   | UART3_RXD     | UART3               | UART3 data receive                               | 3.3V                             | I       | D6     |                                                              |                                                              |
| 4                   | DSI_DN0       | LCD                 | LCD data Mipi0 negative signal                   | 1.8V                             | O       | A9     |                                                              |                                                              |
| 5                   | UART3_TXD     | UART3               | UART3 data transmit                              | 3.3V                             | O       | B7     |                                                              |                                                              |
| 6                   | DSI_DP0       | LCD                 | LCD data Mipi0 positive signal                   | 1.8V                             | O       | B9     |                                                              |                                                              |
| 7                   | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 8                   | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 9                   | UART3_CTS     | GPIO                | GPIO5_IO08                                       | 3.3V                             | I/O     | A7     | Default  configuration as input, internal dropdown           |                                                              |
| 10                  | DSI_DN1       | LCD                 | LCD data Mipi1 negative signal                   | 1.8V                             | O       | A10    |                                                              |                                                              |
| 11                  | ECSPI2_SS0    | ECSPI2              | SPI2 chip select                                 | 3.3V                             | O       | A6     |                                                              |                                                              |
| 12                  | DSI_DP1       | LCD                 | LCD data Mipi1 positive signal                   | 1.8V                             | O       | B10    |                                                              |                                                              |
| 13                  | ECSPI2_SCLK   | ECSPI2              | SPI2 clock                                       | 3.3V                             | O       | E6     |                                                              |                                                              |
| 14                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 15                  | ECSPI2_MISO   | ECSPI2              | SPI2 data input                                  | 3.3V                             | I       | A8     |                                                              |                                                              |
| 16                  | DSI_CKN       | LCD                 | LCD clock negative signal                        | 1.8V                             | O       | A11    |                                                              |                                                              |
| 17                  | ECSPI2_MOSI   | ECSPI2              | SPI2 data output                                 | 3.3V                             | O       | B8     |                                                              |                                                              |
| 18                  | DSI_CKP       | LCD                 | LCD clock positive signal                        | 1.8V                             | O       | B11    |                                                              |                                                              |
| 19                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 20                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 21                  | I2C2_SCL      | I2C2                | I2C2 bus clock                                   | 1.8V                             | O       | D10    | 2.2K pull up to 1.8V                                         |                                                              |
| 22                  | DSI_DN2       | LCD                 | LCD data Mipi2 negative signal                   | 1.8V                             | O       | A12    |                                                              |                                                              |
| 23                  | I2C2_SDA      | I2C2                | I2C2 bus data transmission                       | 1.8V                             | I/O     | D9     | 2.2K pull up to 1.8V                                         |                                                              |
| 24                  | DSI_DP2       | LCD                 | LCD data Mipi2 positive signal                   | 1.8V                             | O       | B12    |                                                              |                                                              |
| 25                  | I2C3_SCL      | I2C3                | I2C3 bus clock                                   | 1.8V                             | O       | E10    | The core board has  no pull-up resistance and requires an external pull-up resistance of 1.8V on  the bottom plate |                                                              |
| 26                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 27                  | I2C3_SDA      | I2C3                | I2C3 bus data transmission                       | 1.8V                             | I/O     | F10    | The core board has  no pull-up resistance and requires an external pull-up resistance of 1.8V on the  bottom plate |                                                              |
| 28                  | DSI_DN3       | LCD                 | LCD data Mipi3 negative signal                   | 1.8V                             | O       | A13    |                                                              |                                                              |
| 29                  | I2C4_SCL      | I2C4                | I2C4 bus clock                                   | 1.8V                             | O       | D13    | 2.2K pull up to 1.8V                                         |                                                              |
| 30                  | DSI_DP3       | LCD                 | LCD data Mipi3 positive signal                   | 1.8V                             | O       | B13    |                                                              |                                                              |
| 31                  | I2C4_SDA      | I2C4                | I2C4 bus data transmission                       | 1.8V                             | I/O     | E13    | 2.2K pull up to 1.8V                                         |                                                              |
| 32                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 33                  | UART2_RXD     | UART2               | UART2 data receive                               | 1.8V                             | I       | F15    |                                                              |                                                              |
| 34                  | CSI_DN0       | CSI                 | CSI LANE0 negative  signal                       | 1.8V                             | O       | A14    |                                                              |                                                              |
| 35                  | UART2_TXD     | UART2               | UART2 data transmit                              | 1.8V                             | O       | E15    |                                                              |                                                              |
| 36                  | CSI_DP0       | CSI                 | CSI LANE0 positive  signal                       | 1.8V                             | O       | B14    |                                                              |                                                              |
| 37                  | UART4_RXD     | UART4               | UART4 data receive                               | 1.8V                             | I       | F19    |                                                              |                                                              |
| 38                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 39                  | UART4_TXD     | UART4               | UART4 data transmit                              | 1.8V                             | O       | F18    |                                                              |                                                              |
| 40                  | CSI_DN1       | CSI                 | CSI LANE1 negative  signal                       | 1.8V                             | O       | A15    |                                                              |                                                              |
| 41                  | ONOFF         | ONOFF               | shutdown function                                | 3.3V                             | I       | A25    |                                                              |                                                              |
| 42                  | CSI_DP1       | CSI                 | CSI LANE1 positive  signal                       | 1.8V                             | O       | B15    |                                                              |                                                              |
| 43                  | ENET_LED_100  | ENET1               | ENET1 led 100M control                           | 3.3V/  1.8V                      |         | A24    | Built in Ethernet  chip(YT8511) pin                          |                                                              |
| 44                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 45                  | POR_B         |                     | PMIC reset output                                | 1.8V                             | O       | B24    | Internal pull-up,  PMIC reset output signal, can be used to reset external devices on the  motherboard |                                                              |
| 46                  | CSI_CKN       | CSI                 | CSI clock negative signal                        | 1.8V                             | O       | A16    |                                                              |                                                              |
| 47                  | SD1_STROBE    | GPIO                | GPIO2_IO11                                       | 3.3V                             | I/O     | R24    | Default configuration  as input, internal dropdown           |                                                              |
| 48                  | CSI_CKP       | CSI                 | CSI clock positive signal                        | 1.8V                             | O       | B16    |                                                              |                                                              |
| 49                  | SD2_DATA2     | uSDHC2              | uSDHC2 data 2                                    | 3.3V/  1.8V                      | I/O     | V24    |                                                              |                                                              |
| 50                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 51                  | SD2_DATA3     | uSDHC2              | uSDHC2 data 3                                    | 3.3V/  1.8V                      | I/O     | V23    |                                                              |                                                              |
| 52                  | CSI_DN2       | CSI                 | CSI LANE2 negative  signal                       | 1.8V                             | I       | A17    |                                                              |                                                              |
| 53                  | SD2_CLK       | uSDHC2              | uSDHC2 clock                                     | 3.3V/  1.8V                      | O       | W23    |                                                              |                                                              |
| 54                  | CSI_DP2       | CSI                 | CSI LANE2 positive  signal                       | 1.8V                             | I       | B17    |                                                              |                                                              |
| 55                  | SD2_CMD       | uSDHC2              | uSDHC2 command  signal                           | 3.3V/  1.8V                      | I       | W24    |                                                              |                                                              |
| 56                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 57                  | SD2_DATA1     | uSDHC2              | uSDHC2 data 1                                    | 3.3V/  1.8V                      | I/O     | AB24   |                                                              |                                                              |
| 58                  | CSI_DN3       | CSI                 | CSI LANE3 negative  signal                       | 1.8V                             | I       | A18    |                                                              |                                                              |
| 59                  | SD2_DATA0     | uSDHC2              | uSDHC2 data 0                                    | 3.3V/  1.8V                      | I/O     | AB23   |                                                              |                                                              |
| 60                  | CSI_DP3       | CSI                 | CSI LANE3 positive  signal                       | 1.8V                             | I       | B18    |                                                              |                                                              |
| 61                  | SD2_WP        | PCIe_nWAKE          | PCIE interface wake-up                           | 3.3V/  1.8V                      | I       | AA27   |                                                              |                                                              |
| 62                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 63                  | SD2_nCD       | uSDHC2              | uSDHC2 detection                                 | 3.3V/  1.8V                      | I       | AA26   |                                                              |                                                              |
| 64                  | PCIE_RXN      | PCIE                | PCIE interface receives negative signal          |                                  | I       | A19    |                                                              |                                                              |
| 65                  | SD2_nRST      | GPIO                | GPIO2_IO19                                       | 3.3V/  1.8V                      | I/O     | AB26   | Default  configuration as input, internal dropdown           |                                                              |
| 66                  | PCIE_RXP      | PCIE                | PCIE interface receives positive signal          |                                  | I       | B19    |                                                              |                                                              |
| 67                  | BOOT_MODE0    | BOOT_MODE0          | Startup and download  mode control               | 1.8V                             | I       | G26    | Internal dropdown                                            |                                                              |
| 68                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 69                  | BOOT_MODE1    | BOOT_MODE1          | startup and download  mode control               | 1.8V                             | I       | G27    | Internal dropdown                                            |                                                              |
| 70                  | PCIE_TXN      | PCIE                | PCIE interface sends negative signal             |                                  | O       | A20    |                                                              |                                                              |
| 71                  | UART1_CTS     | UART1               | Bluetooth flow  control                          | 1.8V                             | I/O     | E18    |                                                              |                                                              |
| 72                  | PCIE_TXP      | PCIE                | PCIE interface sends positive signal             |                                  | O       | B20    |                                                              |                                                              |
| 73                  | UART1_TXD     | UART1               | Bluetooth sending  data                          | 1.8V                             | O       | F13    |                                                              |                                                              |
| 74                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 75                  | UART1_RXD     | UART1               | Bluetooth receiving  data                        | 1.8V                             | I       | E14    |                                                              |                                                              |
| 76                  | PCIE_CLKN     | PCIE                | PCIE interface clock negative signal             | 1.8V                             | I/O     | A21    |                                                              |                                                              |
| 77                  | UART1_RTS     | UART1               | Bluetooth flow  control                          | 1.8V                             | I/O     | D18    |                                                              |                                                              |
| 78                  | PCIE_CLKP     | PCIE                | PCIE interface clock positive signal             | 1.8V                             | I/O     | B21    |                                                              |                                                              |
| 79                  | SD1_DATA0     | uSDHC1              | WIFI module data 0                               | 3.3V                             | I/O     | Y27    |                                                              |                                                              |
| 80                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 81                  | SD1_DATA1     | uSDHC1              | WIFI module data 1                               | 3.3V                             | I/O     | Y26    |                                                              |                                                              |
| 82                  | USB1_VBUS     | USB1_VBUS           | USB1 power supply                                | 3.3V                             | I/O     | F22    |                                                              |                                                              |
| 83                  | SD1_DATA2     | uSDHC1              | WIFI module data 2                               | 3.3V                             | I/O     | T27    |                                                              |                                                              |
| 84                  | USB_OTG1_DN   | USB1                | USB1 negative signal                             | 3.3V                             | I/O     | A22    |                                                              |                                                              |
| 85                  | SD1_DATA3     | uSDHC1              | WIFI module data 3                               | 3.3V                             | I/O     | T26    |                                                              |                                                              |
| 86                  | USB_OTG1_DP   | USB1                | USB1 positive signal                             | 3.3V                             | I/O     | B22    |                                                              |                                                              |
| 87                  | SD1_CMD       | uSDHC1              | WIFI module command signal                       | 3.3V                             | O       | V27    |                                                              |                                                              |
| 88                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 89                  | SD1_CLK       | uSDHC1              | WIFI module clock signal                         | 3.3V                             | O       | V26    |                                                              |                                                              |
| 90                  | USB1_ID       | USB1                | USB1 peripheral monitoring signal                | 3.3V                             | I       | D22    |                                                              |                                                              |
| 91                  | WL_REG_ON     | WL_REG_ON           | WIFI internal power control signal of the module | 3.3V                             | O       | R23    |                                                              |                                                              |
| 92                  | USB2_VBUS     | USB2_VBUS           | USB2 bus power supply monitoring signal          | 3.3V                             | I       | F23    |                                                              |                                                              |
| 93                  | WL_WAKE_HOST  | WL_WAKE_HO ST       | WIFI module wakes up  the HOST signal            | 3.3V                             | I       | W26    |                                                              |                                                              |
| 94                  | USB_OTG2_DN   | USB_OTG2_D N        | USB2 data negative signal                        | 3.3V                             | I/O     | A23    |                                                              |                                                              |
| 95                  | BT_REG_ON     | BT                  | BT internal power control signal                 | 3.3V                             | O       | U27    |                                                              |                                                              |
| 96                  | USB_OTG2_DP   | USB_OTG2_DP         | USB2 data positive signal                        | 3.3V                             | I/O     | B23    |                                                              |                                                              |
| 97                  | BT_WAKE_DEV   | BT                  | BT module wake-up  signal                        | 3.3V                             | O       | U26    |                                                              |                                                              |
| 98                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 99                  | BT_WAKE_HOST  | BT                  | BT module wakes up  the HOST signal              | 3.3V                             | I       | W27    |                                                              |                                                              |
| 100                 | USB2_ID       | USB2_ID             | USB2 peripheral monitoring signal                | 3.3V                             | I       | D23    |                                                              |                                                              |
|                     |               |                     |                                                  |                                  |         |        |                                                              |                                                              |
| J2                  | 1             | VDD_5V              | POWER                                            | 5.0V power supply                | 5V      | I      |                                                              | If using VDD_ 3V3  and VDD_ 1V8 power supply to the motherboard, it is recommended that the  maximum output current of the 5V power supply be ≥ 3A; If not in use, the  maximum output current should be ≥ 2A. |
| 2                   | VDD_5V        | POWER               | 5.0V power supply                                | 5V                               | I       |        |                                                              |                                                              |
| 3                   | VDD_5V        | POWER               | 5.0V power supply                                | 5V                               | I       |        |                                                              |                                                              |
| 4                   | VDD_5V        | POWER               | 5.0V power supply                                | 5V                               | I       |        |                                                              |                                                              |
| 5                   | VDD_5V        | POWER               | 5.0V power supply                                | 5V                               | I       |        |                                                              |                                                              |
| 6                   | VDD_5V        | POWER               | 5.0V power supply                                | 5V                               | I       |        |                                                              |                                                              |
| 7                   | VDD_5V        | POWER               | 5.0V power supply                                | 5V                               | I       |        |                                                              |                                                              |
| 8                   | VDD_5V        | POWER               | 5.0V power supply                                | 5V                               | I       |        |                                                              |                                                              |
| 9                   | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 10                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 11                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 12                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 13                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 14                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 15                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 16                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 17                  | VDD_3V3       | VDD_3V33            | 3.3V output of PMIC  chip                        | 3.3V                             | O       |        | Can be used to supply power to peripheral devices on the motherboard.  When supplying power to the motherboard, VDD_ 3V3 maximum output current:  0.3A.   VDD_ 1V8 maximum output current: 0.1A.  When designing the base plate, the VDD_ 3V3 and VDD_ 1V8 is best not  to supply power to the motherboard with 1V8, it can be used as a pull-down  pin for the core board |                                                              |
| 18                  | VDD_1V8       | VDD_1V8             | 1.8V output of PMIC  chip                        | 1.8V                             | O       |        |                                                              |                                                              |
| 19                  | VDD_3V3       | VDD_3V3             | 3.3V output of PMIC  chip                        | 3.3V                             | O       |        |                                                              |                                                              |
| 20                  | VDD_1V8       | VDD_1V8             | 1.8V output of PMIC chip                         | 1.8V                             | O       |        |                                                              |                                                              |
| 21                  | VDD_3V3       | VDD_3V3             | 3.3V output of PMIC  chip                        | 3.3V                             | O       |        |                                                              |                                                              |
| 22                  | VDD_1V8       | VDD_1V8             | 1.8V output of PMIC  chip                        | 1.8V                             | O       |        |                                                              |                                                              |
| 23                  | VDD_3V3       | VDD_3V3             | 3.3V output of PMIC  chip                        | 3.3V                             | O       |        |                                                              |                                                              |
| 24                  | VDD_1V8       | VDD_1V8             | 1.8V output of PMIC  chip                        | 1.8V                             | O       |        |                                                              |                                                              |
| 25                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 26                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 27                  | M.2_32K_OUT   | M.2_32K_OUT         | ANAMIX_REF_CLK_32K                               | 1.8V                             | O       | AG14   | 100K pull down                                               |                                                              |
| 28                  | SD2_DET       | GPIO                | GPIO1_IO15                                       | 1.8V                             | I/O     | AB9    | Default  configuration for output, internal dropdown         |                                                              |
| 29                  | SYS_nRST      | SYS_nRST            | Core board reset  input signal                   | 1.8V                             | I       |        | internal dropdown                                            |                                                              |
| 30                  | CLKO1         | CAM_P1_MCL K        | CSI main clock                                   | 1.8V                             | O       | AC9    |                                                              |                                                              |
| 31                  | SAI3_MCLK     | SAI3_MCLK           | I2S3 main clock                                  | 3.3V                             | O       | AD6    |                                                              |                                                              |
| 32                  | LVDS_RSTLV    | GPIO                | GPIO1_IO1                                        | 1.8V                             | I/O     | AD9    | Default  configuration for output, internal dropdown         |                                                              |
| 33                  | SAI3_TXFS     | SAI3                | SAI3 bit send                                    | 3.3V                             | O       | AC6    |                                                              |                                                              |
| 34                  | DSI_TP_RSTLV  | GPIO                | GPIO1_IO12                                       | 1.8V                             | I/O     | AB10   | Default  configuration for output, internal dropdown         |                                                              |
| 35                  | SAI3_TXC      | SAI3                | SAI3 send                                        | 3.3V                             | O       | AG6    |                                                              |                                                              |
| 36                  | CSI_P1_IO1    | CSI_P1_IO1          | CSI power control                                | 1.8V                             | I/O     | AC10   |                                                              |                                                              |
| 37                  | SAI3_TXD      | SAI3                | SAI3 data transmit                               | 3.3V                             | O       | AF6    |                                                              |                                                              |
| 38                  | GPIO1_09LV    | GPIO                | GPIO1_IO09                                       | 1.8V                             | I/O     | AF10   | Default  configuration as input, internal dropdown           |                                                              |
| 39                  | SAI3_RXFS     | GPIO                | GPIO4_IO28                                       | 3.3V                             | I/O     | AG8    | Default  configuration as input, internal dropdown           |                                                              |
| 40                  | DSI_BL_ENLV   | GPIO                | GPIO1_IO08                                       | 1.8V                             | I/O     | AG10   | Default  configuration as input, internal dropdown           |                                                              |
| 41                  | SAI3_RXC      | GPIO                | GPIO4_IO29                                       | 3.3V                             | I/O     | AG7    | Default  configuration as input, internal dropdown           |                                                              |
| 42                  | CSI_PWDN      | CSI_PWDN            | CSI enable control                               | 1.8V                             | I/O     | AF11   |                                                              |                                                              |
| 43                  | SAI3_RXD      | GPIO                | GPIO4_IO30                                       | 3.3V                             | I/O     | AF7    | Default  configuration as input, internal dropdown           |                                                              |
| 44                  | CSI_Nrst      | CSI_Nrst            | CSI reset signal                                 | 1.8V                             | I/O     | AG11   |                                                              |                                                              |
| 45                  | LED2          | GPIO                | GPIO5_IO03                                       | 3.3V                             | I/O     | AF9    | Default  configuration for output, internal dropdown         |                                                              |
| 46                  | 4G_RST        | GPIO                | GPIO1_IO05                                       | 1.8V                             | I/O     | AF12   | Default  configuration for output, internal dropdown         |                                                              |
| 47                  | LED1          | GPIO                | GPIO5_IO04                                       | 3.3V                             | I/O     | AG9    | Default  configuration for output, internal dropdown         |                                                              |
| 48                  | DSI_BL_PWMLV  | DSI_BL_PWM          | LCD backlight adjustment                         | 1.8V                             | O       | AF14   |                                                              |                                                              |
| 49                  | SPDIF_EXT_CLK | CLK_REQ             | WIFI clock request                               | 3.3V                             | I       | AF8    |                                                              |                                                              |
| 50                  | LVDS_IRQLV    | LVDS_IRQLV          | TC358775 chip STBY                               | 1.8V                             | O       | AD19   |                                                              |                                                              |
| 51                  | PDM_CLK       | GPIO                | GPIO3_IO20                                       | 3.3V                             | I/O     | AC15   | Default  configuration as input, internal dropdown           |                                                              |
| 52                  | PCIe_nRSTLV   | PCIe_nRSTLV         | PCIE Interface reset                             | 1.8V                             | O       | AC19   |                                                              |                                                              |
| 53                  | PDM_DATA0     | GPIO                | GPIO3_IO21                                       | 3.3V                             | I/O     | AD18   | Default  configuration as input, internal dropdown           |                                                              |
| 54                  | KEY           | GPIO                | GPIO3_IO19                                       | 3.3V                             | I/O     | AB15   | Default  configuration as input，10K pull up to 3.3V         |                                                              |
| 55                  | PDM_DATA1     | GPIO                | GPIO3_IO22                                       | 3.3V                             | I/O     | AC14   | Default  configuration as input, internal dropdown           |                                                              |
| 56                  | SAI1_RXFS     | SAI1_RXFS           | WIFI power control                               | 3.3V                             | I/O     | AG16   |                                                              |                                                              |
| 57                  | PDM_DATA2     | GPIO                | GPIO3_IO23                                       | 3.3V                             | I/O     | AD13   | Default  configuration as input, internal dropdown           |                                                              |
| 58                  | DSI_TS_nINT   | DSI_TS_nINT         | interruption of touch  screen                    | 3.3V                             | I       | AF16   | Default  configuration as input, internal dropdown           |                                                              |
| 59                  | PDM_DATA3     | GPIO                | GPIO3_IO24                                       | 3.3V                             | I/O     | AC13   | Default  configuration as input, internal dropdown           |                                                              |
| 60                  | SAI1_RXD0     | BOOT CFG0           | Boot mode configuration  pin                     | 1.8V                             | I       | AG15   |                                                              |                                                              |
| 61                  | SAI5_MCLK     | GPIO                | GPIO3_IO25                                       | 3,.3V                            | I/O     | AD15   | Default  configuration as input, internal dropdown           |                                                              |
| 62                  | SAI1_RXD1     | BOOT CFG1           | Boot mode  configuration pin                     | 1.8V                             | I       | AF15   |                                                              |                                                              |
| 63                  | SAI1_TXC      | GPIO                | GPIO4_IO11                                       | 3.3V                             | I/O     | AC18   | Default configuration  as input, internal dropdown           |                                                              |
| 64                  | SAI1_RXD2     | BOOT CFG2           | Boot mode  configuration pin                     | 3.3V                             | I       | AG17   |                                                              |                                                              |
| 65                  | SAI1_TXD0     | BOOT CFG8           | Boot mode  configuration pin                     | 3.3V                             | I       | AG20   |                                                              |                                                              |
| 66                  | SAI1_RXD3     | BOOT CFG3           | Boot mode  configuration pin                     | 3.3V                             | I       | AF17   |                                                              |                                                              |
| 67                  | SAI1_TXD1     | BOOT CFG9           | Boot mode  configuration pin                     | 3.3V                             | I       | AF20   |                                                              |                                                              |
| 68                  | SAI1_RXD4     | BOOT CFG4           | Boot mode  configuration pin                     | 3.3V                             | I       | AG18   |                                                              |                                                              |
| 69                  | SAI1_TXD2     | BOOT CFG10          | Boot mode  configuration pin                     | 3.3V                             | I       | AG21   |                                                              |                                                              |
| 70                  | SAI1_RXD5     | BOOT CFG5           | Boot mode  configuration pin                     | 3.3V                             | I       | AF18   |                                                              |                                                              |
| 71                  | SAI1_TXD3     | BOOT CFG11          | Boot mode  configuration pin                     | 3.3V                             | I       | AF21   |                                                              |                                                              |
| 72                  | SAI1_RXD6     | BOOT CFG6           | Boot mode  configuration pin                     | 3.3V                             | I       | AG19   |                                                              |                                                              |
| 73                  | SAI1_TXD4     | BOOT CFG12          | Boot mode  configuration pin                     | 3.3V                             | I       | AG22   |                                                              |                                                              |
| 74                  | SAI1_RXD7     | BOOT CFG7           | Boot mode configuration  pin                     | 3.3V                             | I       | AF19   |                                                              |                                                              |
| 75                  | SAI1_TXD5     | BOOT CFG13          | Boot mode  configuration pin                     | 3.3V                             | I       | AF22   |                                                              |                                                              |
| 76                  | SAI1_MCLK     | GPIO                | GPIO4_IO20                                       | 3.3V                             | I/O     | AB18   | Default  configuration as input, internal dropdown           |                                                              |
| 77                  | SAI1_TXD6     | BOOT CFG14          | Boot mode  configuration pin                     | 3.3V                             | I       | AG23   |                                                              |                                                              |
| 78                  | SAI1_TXFS     | GPIO                | GPIO4_IO10                                       | 3.3V                             | I/O     | AB19   | Default  configuration as input, internal dropdown           |                                                              |
| 79                  | SAI1_TXD7     | BOOT CFG15          | Boot mode  configuration pin                     | 3.3V                             | I       | AF23   |                                                              |                                                              |
| 80                  | SAI2_TXFS     | GPIO                | GPIO4_IO24                                       | 1.8V                             | I/O     | AD23   | Default  configuration as input, internal dropdown           |                                                              |
| 81                  | NVCC_SD2      | NVCC_SD2            | SD card power supply                             | 3.3V/  1.8V                      | O       |        | Default 3.3V, can be  configured as 1.8V                     |                                                              |
| 82                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 83                  | SAI2_TXD      | GPIO                | GPIO4_IO26                                       | 1.8V                             | I/O     | AC22   | Default  configuration as input, internal dropdown           |                                                              |
| 84                  | ETH_TRP0      | ENET1               | ENET1 data 0 positive signal                     |                                  |         |        | Built in Ethernet  chip(YT8511) pin                          |                                                              |
| 85                  | SAI2_TXC      | GPIO                | GPIO4_IO25                                       | 1.8V                             | I/O     | AD22   |                                                              |                                                              |
| 86                  | ETH_TRN0      | ENET1               | ENET1 data 0 negative signal                     |                                  |         |        | Built in Ethernet  chip(YT8511) pin                          |                                                              |
| 87                  | SAI2_RXD      | GPIO                | GPIO4_IO23                                       | 1.8V                             | I/O     | AC24   | Default  configuration as input, internal dropdown           |                                                              |
| 88                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 89                  | ENET_LED_ACT  | ENET_LED_AC T       | ENET1 Activity LED                               |                                  |         |        | Built in Ethernet  chip(YT8511) pin                          |                                                              |
| 90                  | ETH_TRP1      | ETH_TRP1            | ENET1 data 1 positive                            |                                  |         |        |                                                              |                                                              |
| 91                  | ENET_LED_1000 | ENET_LED_100 0      | ENET1 LINK LED                                   |                                  |         |        | Built in Ethernet  chip(YT8511) pin                          |                                                              |
| 92                  | ETH_TRN1      | ETH_TRN1            | ENET1 data 1 negative signal                     |                                  |         |        | Built in Ethernet  chip(YT8511) pin                          |                                                              |
| 93                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 94                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 95                  | ETH_TRP3      | ENET1               | ENET1 data 3 positive                            |                                  |         |        | Built in Ethernet  chip(YT8511) pin                          |                                                              |
| 96                  | ETH_TRP2      | ENET1               | ENET1 data 2 positive                            |                                  |         |        | Built in Ethernet  chip(YT8511) pin                          |                                                              |
| 97                  | ETH_TRN3      | ENET1               | ENET1 data 3 negative signal                     |                                  |         |        | Built in Ethernet chip(YT8511)  pin                          |                                                              |
| 98                  | ETH_TRN2      | ENET1               | ENET1 data 2 negative signal                     |                                  |         |        | Built in Ethernet  chip(YT8511) pin                          |                                                              |
| 99                  | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |
| 100                 | DGND          | DGND                | Power supply ground                              | 0V                               |         |        |                                                              |                                                              |

NOTE 1:

Num  —— Note the pin number of the core board connector

Ball  —— CPU pin ball number

IO  —— CPU pin Input/output mode

Vol  —— CPU pin signal level

NOTE 2:

Part reference ——Core board connector tag number

Signal name  ——Description of Core Board Pin Signal Names

 Default function —— All pin functions of the core board are specified in the "default functions" in the table below. If you have any questions, please contact our sales or technical support in a timely manner.

# 5.  Electrical Parameters

## 5.1.  Absolute Electrical Parameters



| **Parameter** | **Description**             | **Min** | **Typ** | **Max** | **Unit** |
| ------------- | --------------------------- | ------- | ------- | ------- | -------- |
| VCC_SYS       | Input Voltage               | -0.3    |         | 6.0     | V        |
| Ta            | Operating temperature range | -40     | 25      | 75      | ℃        |
| Ts            | Store temperature range     | -40     | 25      | 125     | ℃        |

**Note:** Exposure to conditions beyond the absolute maximum ratings may cause permanent damage and affect the reliability and safety of the device and its systems. The functional operations cannot be guaranteed beyond specified values in the recommended conditions.

 

## 5.2.  Normal working parameters



| **Parameter**            | **Description**              | **Min** | **Typ** | **Max** | **Unit** |
| ------------------------ | ---------------------------- | ------- | ------- | ------- | -------- |
| VSYS_5V                  | Input  Voltage               | 4.5     | 5       | 5.5     | V        |
| Temperature              | Operating  temperature range | -40     | 25      | 75      | ℃        |
| Store  temperature range | -40                          | 25      | 85      | ℃       |          |
| Humidity                 | Operating humidity  range    | 10      |         | 80      | %RH      |
| Store humidity  range    | 10                           |         | 90      | %RH     |          |

 

## 5.3.  Power Consumption parameters



| **Working conditions** | **Supply voltage(unit : V)** | **Average current(unit : mA)** | **Peak current(unit : mA)** | **Total power consumption(unit : mW)** |
| ---------------------- | ---------------------------- | ------------------------------ | --------------------------- | -------------------------------------- |
| During boot            | 5                            | 110                            | 130                         | 550                                    |
| Full-load stage        | 5                            | 420                            | -                           | 2100                                   |
| Mem low power  mode    | 5                            | 10                             | -                           | 50                                     |
| Freeze low  power mode | 5                            | 90                             | -                           | 450                                    |

 

# 6.  Hardware Design Guidelines

The "Signal Name" column defaults to the core board pin name.

## 6.1.  Power Pins



| power network       | Description                                      | Recommended voltage value                                    |
| ------------------- | ------------------------------------------------ | ------------------------------------------------------------ |
| VDD_5V              | Core board power  supply pin, 5V input           | 5V                                                           |
| VDD_3V3             | 3.3V output                                      |                                                              |
| VDD_1V8             | 1.8V output                                      |                                                              |
| USB1_VBUS USB2_VBUS | USB power supply, 5V input                       | 5V                                                           |
| NVCC_SD2            | Supports 1.8V/3.3V output, software controllable | 3.3V/1.8V                                                    |
| DGND                | signal ground                                    | Signal ground, core board power ground, all DGND  pins need to be connected |

The core board uses VDD_ Powered by 5V, the PMIC power management chip generates multiple different voltages to meet the power supply of modules such as MPU, DDR4, Flash, etc. The complete PMIC model is BD71847MWV.

## 6.2.  Reset and ON/OFF Control Pins

The core board provides two dedicated pins, NRST reset and ON/OFF, which have different functions. It is recommended to connect both pins for different purposes.



| Signal name | I/O  | Function  Description                                        | Pin number |
| ----------- | ---- | ------------------------------------------------------------ | ---------- |
| SYS_nRST    | I    | POR power-off reset  pin. RC reset circuit or hardware watchdog reset chip can be used. | J2.29      |
| ON/OFF      | I    | Usually  an external button is attached.  After the first power on startup, press the button  to automatically shut down the system. Press this button again to turn it on.  When  the system is in sleep, pressing this button will wake up the system. | J1.41      |

## 6.3.  Boot Control Pins

① BOOT mode set

When the i.MX8M Mini series processor starts, it first executes the program in the internal Boot ROM of the chip. The Boot ROM enters boot mode by reading the BOOT Mode pins. The specific correspondence is as follows:



| Boot Mode [1:0] | Function          | Description                                                  |
| --------------- | ----------------- | ------------------------------------------------------------ |
| 00              | Boot from Fuse    | Internal Fuses reads startup information, NXP recommends using this  method for shipment during mass production |
| 01              | Serial Downloader | Support from USB_  Download the program from the OTG1 port. It should be noted that in this  mode, UART1 and UART2 have higher priority than USB_ OTG port, if these two  serial ports detect data, they will not enter USB write mode, the computer  cannot detect the device, and Mfgtool S cannot be used. |
| 10              | Internal Boot     | Read the boot  configuration bit from GPIO, NXP is recommended for development mode. But in  this mode, there is no need to write a fuse (one-time programming, non  erasable), and modifying the startup mode is convenient. Many users directly  use it for mass production. |
| 11              | Reserved          |                                                              |

 

 

 

 

 

 

 

 

 

 

 

 

 

 

The Boot Mode pins do not have a pull-up or pull-down design added within the core board. But there is a default pull-down function inside the chip.

② BOOT mode device

i. The MX8M Mini series processor supports a wide range of boot devices, and there are also many pins that need to be configured for boot devices, with a total of 16 pins. BOOT_ CFG [7:0] corresponds to pin SAI1_ RXD [7:0], BOOT_ CFG [15:8] corresponds to pin SAI1_ TXD [7:0].

Setting BOOT_ Before CFG, ensure that the BOOT MODE is set correctly. Taking BOOT MODE as an example to set up an internal boot device.

BOOT_ CFG [15:0] does not design pull-up or pull-down resistors on the core board. All these pins are in the input type during chip reset and at the time of reset completion, and the chip is designed with a pull-down 95K resistor.



| Boot_CFG [15:0]     | Start Source    | Description |
| ------------------- | --------------- | ----------- |
| X001 00XX XXX1 000X | SD/eSD（uSDHC1) |             |
| X001 01XX XXX1 000X | SD/eSD（uSDHC2) |             |
| X010 10XX X010 0011 | eMMC（uSDHC3)   |             |
| X110 X010 XXXX XXXX | QSPI            |             |

Note: The pull-up voltage of the BOOT signal is determined by the VDD of the core board_ 3V3 pin provided.

 

## 6.4.  USB Data/Control Pins

The core board provides two high-speed USB2.0 OTG controllers, supporting HOST and Device modes. USB1 can serve as the port for downloading programs.



| Part  reference | Num         | Signal name | Default function                         | Function description | Vol  | I/O  | Ball |
| --------------- | ----------- | ----------- | ---------------------------------------- | -------------------- | ---- | ---- | ---- |
| J1              | 82          | USB1_VBUS   | USB1_VBUS                                | USB1 power supply    | 3.3V | I/O  | F22  |
| 84              | USB_OTG1_DN | USB1        | USB1 data negative                       | 3.3V                 | I/O  | A22  |      |
| 86              | USB_OTG1_DP | USB1        | USB1 data positive                       | 3.3V                 | I/O  | B22  |      |
| 90              | USB1_ID     | USB1        | USB1 peripheral monitoring signal        | 3.3V                 | I    | D22  |      |
| 92              | USB2_VBUS   | USB2_VBUS   | USB2 bus power supply  monitoring signal | 3.3V                 | I    | F23  |      |
| 94              | USB_OTG2_DN | USB_OTG2_DN | USB2 data  negative                      | 3.3V                 | I/O  | A23  |      |
| 96              | USB_OTG2_DP | USB_OTG2_DP | USB2 data positive                       | 3.3V                 | I/O  | B23  |      |
| 100             | USB2_ID     | USB2_ID     | USB2 peripheral monitoring signal        | 3.3V                 | I    | D23  |      |

①

A

 

 

 

 

 

 

 

 

 

 

 

 

All USB data cables require a 90 Ω differential impedance;

②Only USB1 on the core board supports USB burning and writing system;

③Please select the appropriate ESD device, The capacitance of the signal line to the ground shall not exceed 0.2pF.

 

## 6.5.  SPI Interface Control Pins

The core board supports up to 3 SPI controllers and supports master/slave mode. SPI signals include SPI_ CLK, SPI_ MOSI and SPI_ When designing MISO, it is necessary to first confirm the relationship between the master and slave devices, and then confirm the direction of MOSI and MISO signals. If you want to use more SPI interfaces, please consult the chip manual or use the Configuration Tools for i.MX software for configuration, and modify the pin configuration in the driver.



| Part  reference | Num         | Signal name | Default function | Function description | Vol  | I/O  | Ball |
| --------------- | ----------- | ----------- | ---------------- | -------------------- | ---- | ---- | ---- |
| J1              | 1           | ECSPI1_SS0  | ECSPI1           | SPI1 chip select     | 3.3V | O    | B6   |
| 3               | ECSPI1_SCLK | ECSPI1      | SPI1 clock       | 3.3V                 | O    | D6   |      |
| 9               | ECSPI1_MISO | ECSPI1      | SPI1 data input  | 3.3V                 | I    | A7   |      |
| 5               | ECSPI1_MOSI | ECSPI1      | SPI1 data output | 3.3V                 | O    | B7   |      |
| 11              | ECSPI2_SS0  | ECSPI2      | SPI2 chip select | 3.3V                 | O    | A6   |      |
| 13              | ECSPI2_SCLK | ECSPI2      | SPI2 clock       | 3.3V                 | O    | E6   |      |
| 15              | ECSPI2_MISO | ECSPI2      | SPI2 data input  | 3.3V                 | I    | A8   |      |
| 17              | ECSPI2_MOSI | ECSPI2      | SPI2 data output | 3.3V                 | O    | B8   |      |
| 35              | ECSPI3_SS0  | ECSPI3      | SPI3 chip select | 1.8V                 | O    | E15  |      |
| 75              | ECSPI3_SCLK | ECSPI3      | SPI3 clock       | 1.8V                 | O    | E14  |      |
| 33              | ECSPI3_MISO | ECSPI3      | SPI3 data input  | 1.8V                 | I    | F15  |      |
| 73              | ECSPI3_MOSI | ECSPI3      | SPI3 data output | 1.8V                 | O    | F13  |      |

 

 

 

##  

##  

##  

##  

 

## 6.6 SAI Interface Control Pins

The receiving data core board provides 5 synchronous audio SAI interfaces. The S AI interface supports various full duplex and serial communication audio interfaces with frame synchronization function, such as I2S, AC97, TDM, CODEC and other commonly used audio interfaces.

When using, it is necessary to connect the interface to an external audio codec, and then connect the headphones and microphone externally.



| Part reference | Num       | Signal name | Default  function                  | Function description | Vol  | I/O  | Ball |
| -------------- | --------- | ----------- | ---------------------------------- | -------------------- | ---- | ---- | ---- |
| J2             | 76        | SAI1_MCLK   | GPIO4_IO20                         | SAI1 main clock      | 3.3V | O    | AB18 |
| 78             | SAI1_TXFS | GPIO4_IO10  | SAI1 send frame synchronization    | 3.3V                 | O    | AB19 |      |
| 63             | SAI1_TXC  | GPIO4_IO11  | SAI1 send bit clock                | 3.3V                 | O    | AC18 |      |
| 65             | SAI1_TXD0 | BOOT CFG8   | SAI1 send data 0                   | 3.3V                 | O    | AG20 |      |
| 67             | SAI1_TXD1 | BOOT CFG9   | SAI1 send data 1                   | 3.3V                 | O    | AF20 |      |
| 69             | SAI1_TXD2 | BOOT CFG10  | SAI1 send data 2                   | 3.3V                 | O    | AG21 |      |
| 71             | SAI1_TXD3 | BOOT CFG11  | SAI1 send data 3                   | 3.3V                 | O    | AF21 |      |
| 73             | SAI1_TXD4 | BOOT CFG12  | SAI1 send data 4                   | 3.3V                 | O    | AG22 |      |
| 75             | SAI1_TXD5 | BOOT CFG13  | SAI1 send data 5                   | 3.3V                 | O    | AF22 |      |
| 77             | SAI1_TXD6 | BOOT CFG14  | SAI1 send data 6                   | 3.3V                 | O    | AG23 |      |
| 79             | SAI1_TXD7 | BOOT CFG15  | SAI1 send data 7                   | 3.3V                 | O    | AF23 |      |
| 56             | SAI1_RXFS | GPIO4_IO0   | SAI1 receive frame synchronization | 3.3V                 | I    | AG16 |      |
| 58             | SAI1_RXC  | GPIO4_IO1   | SAI1 receive bit clock             | 3.3V                 | I    | AF16 |      |
| 60             | SAI1_RXD0 | BOOT CFG0   | SAI1 receive data 0                | 3.3V                 | I    | AG15 |      |
| 62             | SAI1_RXD1 | BOOT CFG1   | SAI1 receive data 1                | 3.3V                 | I    | AF15 |      |
| 64             | SAI1_RXD2 | BOOT CFG2   | SAI1 receive data 2                | 3.3V                 | I    | AG17 |      |
| 66             | SAI1_RXD3 | BOOT CFG3   | SAI1 receive data 3                | 3.3V                 | I    | AF17 |      |
| 68             | SAI1_RXD4 | BOOT CFG4   | SAI1 receive data 4                | 3.3V                 | I    | AG18 |      |
| 70             | SAI1_RXD5 | BOOT CFG5   | SAI1 receive data 5                | 3.3V                 | I    | AF18 |      |
| 72             | SAI1_RXD6 | BOOT CFG6   | SAI1 receive data 6                | 3.3V                 | I    | AG19 |      |
| 74             | SAI1_RXD7 | BOOT CFG7   | SAI1 receive data 7                | 3.3V                 | I    | AF19 |      |
| J2             | 50        | SAI2_MCLK   | GPIO4_IO27                         | SAI2 main clock      | 1.8V | O    | AD19 |
| 80             | SAI2_TXFS | GPIO4_IO24  | SAI2 send frame synchronization    | 1.8V                 | O    | AD23 |      |
| 85             | SAI2_TXC  | GPIO4_IO25  | SAI2 send bit clock                | 1.8V                 | O    | AD22 |      |
| 83             | SAI2_TXD  | GPIO4_IO26  | SAI2 send data                     | 1.8V                 | O    | AC22 |      |
| 52             | SAI2_RXFS | GPIO4_IO21  | SAI2 receive frame synchronization | 1.8V                 | I    | AC19 |      |
| 87             | SAI2_RXD  | GPIO4_IO23  | SAI2 receive data                  | 1.8V                 | I    | AC24 |      |
| J2             | 31        | SAI3_MCLK   | SAI3_MCLK                          | SAI3 main clock      | 3.3V | O    | AD6  |
| 33             | SAI3_TXFS | SAI3_TXFS   | SAI3 send frame synchronization    | 3.3V                 | O    | AC6  |      |
| 35             | SAI3_TXC  | SAI3_TXC    | SAI3 send bit clock                | 3.3V                 | O    | AG6  |      |
| 37             | SAI3_TXD  | SAI3_TXD    | SAI3 send data                     | 3.3V                 | O    | AF6  |      |
| 39             | SAI3_RXFS | GPIO4_IO28  | SAI3 receive frame synchronization | 3.3V                 | I    | AG8  |      |
| 41             | SAI3_RXC  | GPIO4_IO29  | SAI3 receive bit clock             | 3.3V                 | I    | AG7  |      |
| 43             | SAI3_RXD  | GPIO4_IO30  | SAI3 receive data                  | 3.3V                 | I    | AF7  |      |
| J2             | 61        | SAI5_MCLK   | GPIO4_IO25                         | SAI5 main clock      | 3.3V | O    | AD15 |
| 54             | SAI5_RXFS | GPIO3_IO19  | SAI5 receive frame synchronization | 3.3V                 | I    | AB15 |      |
| 51             | SAI5_RXC  | GPIO3_IO20  | SAI5 receive bit clock             | 3.3V                 | I    | AC15 |      |
| 53             | SAI5_RXD0 | GPIO3_IO21  | SAI5 receive data 0                | 3.3V                 | I    | AD18 |      |
| 55             | SAI5_RXD1 | GPIO3_IO22  | SAI5 receive data 1                | 3.3V                 | I    | AC14 |      |
| 57             | SAI5_RXD2 | GPIO3_IO23  | SAI5 receive data 2                | 3.3V                 | I    | AD13 |      |
| 59             | SAI5_RXD3 | GPIO3_IO24  | SAI5 receive data 3                | 3.3V                 | I    | AC13 |      |



## 6.6.  UART Interface Control Pins

The core board has up to 4 asynchronous serial ports. The core board is configured with 4 serial ports by default, among which UART1 has flow control (RTS and CTS signals) function.



| Part  reference | Num       | Signal name | Default function    | Function description | Vol  | I/O  | Ball |
| --------------- | --------- | ----------- | ------------------- | -------------------- | ---- | ---- | ---- |
| J1              | 3         | UART3_RXD   | UART3               | UART3 data receive   | 3.3V | I    | D6   |
| 5               | UART3_TXD | UART3       | UART3 data transmit | 3.3V                 | O    | B7   |      |
| J1              | 33        | UART2_RXD   | UART2               | UART2 data receive   | 1.8V | I    | F15  |
| 35              | UART2_TXD | UART2       | UART2 data transmit | 1.8V                 | O    | E15  |      |
| J1              | 37        | UART4_RXD   | UART4               | UART4 data receive   | 1.8V | I    | F19  |
| 39              | UART4_TXD | UART4       | UART4 data transmit | 1.8V                 | O    | F18  |      |
| J1              | 71        | UART1_CTS   | UART1               | GPIO5_IO26           | 1.8V | I/O  | E18  |
| 73              | UART1_TXD | UART1       | GPIO5_IO23          | 1.8V                 | O    | F13  |      |
| 75              | UART1_RXD | UART1       | GPIO5_IO22          | 1.8V                 | I    | E14  |      |
| 77              | UART1_RTS | UART1       | GPIO5_IO27          | 1.8V                 | I/O  | D18  |      |

 

 

 

 

 

 

 

 

 

 

 

 

 

 

## 6.7.  I2C Interface Control Pins

The i.MX8M Mini supports a maximum of 4 I2C buses, where I2C1 is used to connect the core board PMIC power management chip, and I2C1 is not connected to the core board interface. Therefore, the core board supports a maximum of 3 I2C buses.power management chip, and I2C1 is not connected to the core board interface. Therefore, the core board supports a maximum of 3 I2C buses.



| Part  reference | Num      | Signal name | Default function           | Function description | Vol  | I/O  | Ball |
| --------------- | -------- | ----------- | -------------------------- | -------------------- | ---- | ---- | ---- |
| J1              | 21       | I2C2_SCL    | I2C2                       | I2C2 bus clock       | 1.8V | O    | D10  |
| 23              | I2C2_SDA | I2C2        | I2C2 bus data transmission | 1.8V                 | I/O  | D9   |      |
| 25              | I2C3_SCL | I2C3        | I2C3 bus clock             | 1.8V                 | O    | E10  |      |
| 27              | I2C3_SDA | I2C3        | I2C3 bus data transmission | 1.8V                 | I/O  | F10  |      |
| 29              | I2C4_SCL | I2C4        | I2C4 bus clock             | 1.8V                 | O    | D13  |      |
| 31              | I2C4_SDA | I2C4        | I2C4 bus data transmission | 1.8V                 | I/O  | E13  |      |

 

 

 

 

 

 

 

 

 

 

 

 

## 6.8.   Ethernet Interface Control Pins

The bus power monitoring signal core board is designed with an Ethernet PHY circuit, supporting 10/100/1000M adaptive mode. When users design the motherboard circuit, they only need to design the transformer isolation circuit and the RJ45 circuit.



| Part  reference | Num           | Signal name   | Default function             | Function description         | Vol       | I/O  | Ball |
| --------------- | ------------- | ------------- | ---------------------------- | ---------------------------- | --------- | ---- | ---- |
| J2              | 84            | ETH_TRP0      | ENET1                        | ENET1 data 0 positive signal |           | I/O  |      |
| 86              | ETH_TRN0      | ENET1         | ENET1 data 0 negative signal |                              | I/O       |      |      |
| 89              | ENET_LED_ACT  | ENET_LED_ACT  | ENET1 Activity LED           |                              | I/O       |      |      |
| 90              | ETH_TRP1      | ETH_TRP1      | ENET1 data 1 positive signal |                              | I/O       |      |      |
| 91              | ENET_LED_1000 | ENET_LED_1000 | ENET1 LINK LED               |                              | I/O       |      |      |
| 92              | ETH_TRN1      | ETH_TRN1      | ENET1 data 1 negative signal |                              | I/O       |      |      |
| 95              | ETH_TRP3      | ENET1         | ENET1 data 3 positive signal |                              | I/O       |      |      |
| 96              | ETH_TRP2      | ENET1         | ENET1 data 2 positive signal |                              | I/O       |      |      |
| 97              | ETH_TRN3      | ENET1         | ENET1 data 3 negative signal |                              | I/O       |      |      |
| 98              | ETH_TRN2      | ENET1         | ENET1 data 3 negative signal |                              | I/O       |      |      |
| J1              | 43            | ENET_LED_100  | ENET1                        | ENET1 light 100Mbps control  | 3.3V/1.8V |      | A24  |

①Four differential pairs (ETH_TRP0 and ETH_TRN0, ETH_TRP1 and ETH_TRN1, ETH_TRP2 and ETH_TRN2, ETH_TRP3 and ETH_TRN3) need to be matched with a differential 100 ohm impedance;

②ETH_ TRP0, ETH_ TRN0, ETH_ TRP1, ETH_ TRN1, ETH_ TRP2, ETH_ TRN2, ETH_ TRP3, ETH_ TRN3 requires equal length processing between these signals.

 

## 6.9.  MIPI CSI Interface Control Pins

The core board supports one CSI interface. Used for external camera input signals, 4 lane MIPI interface.



| Part  reference | Num     | Signal name | Default function           | Function description      | Vol  | I/O  | Ball |
| --------------- | ------- | ----------- | -------------------------- | ------------------------- | ---- | ---- | ---- |
| J1              | 34      | CSI_DN0     | CSI                        | CSI LANE0 negative signal | 1.8V | O    | A14  |
| 36              | CSI_DP0 | CSI         | CSI LANE0  positive signal | 1.8V                      | O    | B14  |      |
| 40              | CSI_DN1 | CSI         | CSI LANE1 negative signal  | 1.8V                      | O    | A15  |      |
| 42              | CSI_DP1 | CSI         | CSI LANE1 positive signal  | 1.8V                      | O    | B15  |      |
| 46              | CSI_CKN | CSI         | CSI clock negative signal  | 1.8V                      | O    | A16  |      |
| 48              | CSI_CKP | CSI         | CSI clock positive signal  | 1.8V                      | O    | B16  |      |
| 52              | CSI_DN2 | CSI         | CSI LANE2 negative signal  | 1.8V                      | I    | A17  |      |
| 54              | CSI_DP2 | CSI         | CSI LANE2  positive signal | 1.8V                      | I    | B17  |      |
| 58              | CSI_DN3 | CSI         | CSI LANE3  negative signal | 1.8V                      | I    | A18  |      |
| 60              | CSI_DP3 | CSI         | CSI LANE3  positive signal | 1.8V                      | I    | B18  |      |

①Differential wiring impedance requirement of 100 ohms;

②Equal length processing is required for both intra and inter pairs of differential pair.



## 6.10.  MIPI DSI Interface Control Pins

The core board supports 1 MIPI 4 lane DSI display output interface and supports a maximum resolution of 1080p60.



| Part  reference | Num     | Signal name | Default function          | Function description      | Vol  | I/O  | Ball |
| --------------- | ------- | ----------- | ------------------------- | ------------------------- | ---- | ---- | ---- |
| J1              | 4       | DSI_DN0     | LCD                       | DSI data0 negative signal | 1.8V | O    | A9   |
| 6               | DSI_DP0 | LCD         | DSI data0 positive signal | 1.8V                      | O    | B9   |      |
| 10              | DSI_DN1 | LCD         | DSI data1 negative signal | 1.8V                      | O    | A10  |      |
| 12              | DSI_DP1 | LCD         | DSI data1 positive signal | 1.8V                      | O    | B10  |      |
| 16              | DSI_CKN | LCD         | DSI clock negative signal | 1.8V                      | O    | A11  |      |
| 18              | DSI_CKP | LCD         | DSI clock positive signal | 1.8V                      | O    | B11  |      |
| 22              | DSI_DN2 | LCD         | DSI data2 negative signal | 1.8V                      | O    | A12  |      |
| 24              | DSI_DP2 | LCD         | DSI data2 positive signal | 1.8V                      | O    | B12  |      |
| 28              | DSI_DN3 | LCD         | DSI data3 negative signal | 1.8V                      | O    | A13  |      |
| 30              | DSI_DP3 | LCD         | DSI data3 positive signal | 1.8V                      | O    | B13  |      |
| J2              | 30      | CLKO1       | CAM_P1_MCLK               | CSI main clock            | 1.8V | O    | AC9  |

①

 

 

 

 

 

 

 

 

 

 

 

Differential wiring impedance requirement of 100 ohms;

②Equal length processing is required for both intra and inter pairs of differential pairs.

 

## 6.11.  PCIE Interface Control Pins

The core board supports 1 lane PCIE 2.0 interface.



| Part  reference | Num       | Signal name | Default function             | Function description   | Vol       | I/O  | Ball |
| --------------- | --------- | ----------- | ---------------------------- | ---------------------- | --------- | ---- | ---- |
| J1              | 61        | SD2_WP      | PCIe_nWAKE                   | PCIE Interface wake-up | 3.3V/1.8V |      | AA27 |
| 64              | PCIE_RXN  | PCIE        | PCIE data receive  negative  |                        | I         | A19  |      |
| 66              | PCIE_RXP  | PCIE        | PCIE data  receive positive  |                        | I         | B19  |      |
| 70              | PCIE_TXN  | PCIE        | PCIE data  transmit negative |                        | O         | A20  |      |
| 72              | PCIE_TXP  | PCIE        | PCIE data  transmit positive |                        | O         | B20  |      |
| 76              | PCIE_CLKN | PCIE        | PCIE clock input  negative   | 1.8V                   | I/O       | A21  |      |
| 78              | PCIE_CLKP | PCIE        | PCIE clock input  positive   | 1.8V                   | I/O       | B21  |      |

①PCIe TX/RX data and CLK reference clock both require an 85 Ω differential impedance;

②Differential alignment requires equal length processing.

 

## 6.12.    SDIO Interface Control Pins

The core board is equipped with three uSDHC interfaces. And introduced two SDIO interfaces, uSDHC1 and uSDHC2. Both uSDHC interfaces support being used as the corresponding interfaces for booting devices. USDHC2 is commonly used to design Micro SD cards, while uSDHC1 can be used to design communication interfaces between modules with SDIO interfaces.



| Part  reference | Num         | Signal name | Default function         | Function description | Vol       | I/O  | Ball |
| --------------- | ----------- | ----------- | ------------------------ | -------------------- | --------- | ---- | ---- |
| J1              | 95          | SD1_DATA4   | GPIO2_IO6                | SD1 Data 4           | 3.3V      | I/O  | U27  |
| 97              | SD1_DATA5   | GPIO2_IO7   | SD1 Data 5               | 3.3V                 | I/O       | U26  |      |
| 99              | SD1_DATA6   | GPIO2_IO8   | SD1 Data 6               | 3.3V                 | I/O       | W27  |      |
| 93              | SD1_DATA7   | GPIO2_IO9   | SD1 Data 7               | 3.3V                 | I/O       | W26  |      |
| 47              | SD1_STROBE  | GPIO2_IO11  | SD1 strobe signal        | 3.3V                 | I         | R24  |      |
| 91              | SD1_RESET_B | GPIO2_IO10  | SD1 reset signal         | 3.3V                 | O         | R23  |      |
| 83              | SD1_DATA2   | uSDHC1      | SD1 Data 2               | 3.3V                 | I/O       | T27  |      |
| 85              | SD1_DATA3   | uSDHC1      | SD1 Data 3               | 3.3V                 | I/O       | T26  |      |
| 87              | SD1_CMD     | uSDHC1      | SD1 command signal       | 3.3V                 | I/O       | V27  |      |
| 89              | SD1_CLK     | uSDHC1      | SD1 clock                | 3.3V                 | O         | V26  |      |
| 79              | SD1_DATA0   | uSDHC1      | SD1 Data 0               | 3.3V                 | I/O       | Y27  |      |
| 81              | SD1_DATA1   | uSDHC1      | SD1 Data 1               | 3.3V                 | I/O       | Y26  |      |
| J1              | 49          | SD2_DATA2   | uSDHC2                   | SD2 Data 2           | 1.8V/3.3V | I/O  | V24  |
| 51              | SD2_DATA3   | uSDHC2      | SD2 Data 3               | 1.8V/3.3V            | I/O       | V23  |      |
| 55              | SD2_CMD     | uSDHC2      | SD2 command signal       | 1.8V/3.3V            | I/O       | W24  |      |
| 53              | SD2_CLK     | uSDHC2      | SD2 clock                | 1.8V/3.3V            | O         | W23  |      |
| 59              | SD2_DATA0   | uSDHC2      | SD2 Data 0               | 1.8V/3.3V            | I/O       | AB23 |      |
| 57              | SD2_DATA1   | uSDHC2      | SD2 Data 1               | 1.8V/3.3V            | I/O       | AB24 |      |
| 65              | SD2_RESET_B | GPIO2_IO19  | SD2 reset signal         | 1.8V/3.3V            | O         | AB26 |      |
| 63              | SD2_NCD     | uSDHC2      | SD2 card detect signal   | 1.8V/3.3V            | I         | AA26 |      |
| 61              | SD2_WP      | GPIO2_IO20  | SD2 write protect signal | 1.8V/3.3V            | I         | AA27 |      |

①Single ended 50 ohm impedance matching of SDIO signals;

②Equal length processing is required between DATA0, DATA1, DATA2, DATA3, CMD and CLK.

 

## 6.13.    SPDIF Interface Control Pins



| Part reference | Num      | Signal name   | Default  function | Function description | Vol  | I/O  | Ball |
| -------------- | -------- | ------------- | ----------------- | -------------------- | ---- | ---- | ---- |
| J2             | 49       | SPDIF_EXT_CLK | CLK_REQ           | SPDIF  clock         | 3.3V | O    | AF8  |
| 47             | SPDIF_RX | GPIO5_IO04    | SPDIF  receive    | 3.3V                 | I    | AG9  |      |
| 45             | SPDIF_TX | GPIO5_IO03    | SPDIF  transmit   | 3.3V                 | O    | AF9  |      |

 

## 6.14.    Clock output Interface Pins



| Part reference | Num  | Signal name | Default  function | Function description | Vol  | I/O  | Ball |
| -------------- | ---- | ----------- | ----------------- | -------------------- | ---- | ---- | ---- |
| J2             | 27   | REF_CLK_32K | M.2_32K_OUT       | 32K clock output     | 1.8V | O    | AG14 |



# 7.  Product Dimensions

 

|      |                                                              |
| ---- | ------------------------------------------------------------ |
|      | ![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image012.jpg) |

The top view of the core board is shown in the following figure:



 

|      |                                                              |
| ---- | ------------------------------------------------------------ |
|      | ![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image014.jpg) |







| Item                 | Parameter                                              |
| -------------------- | ------------------------------------------------------ |
| Exterior             | board  to board connectors                             |
| Core  Board Size     | 60mm  X 49mm X 2.4mm                                   |
| Pin  Spacing         | 0.8  mm                                                |
| Number  of Pins      | 200  Pins                                              |
| PCB  board thickness | 1.2mm                                                  |
| Number  of Layers    | 8  layers, produced by gold sinking process, lead-free |
| Warpage              | less  than 0.5 %                                       |

Connector: Two 0.8mm spacing, 100pin board to board connectors. The core board connector model is 61082-101400LF, and the corresponding bottom board connector model is 61083-101400LF. The connector size diagram is shown in the Amphenol fci.

Four installation holes with a diameter of 3.0 mm are reserved at the four corners of the core board. Customers who use the product in vibration environments can install fixing screws to improve the reliability of product connections.

Users can refer to the development board design and use M2.5, L=5mm patch nuts on the bottom plate. The specifications of the patch nuts are shown in the following figure:

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image016.jpg)

 

# 8.  The Methods of Coreboard Thermal Control 

There is a generic thermal system driver framework in the Linux kernel that defines a number of temperature control strategies.The i.MX8M Mini chip has a T-sensor that detects the chip's internal temperature and uses the Power_allocator strategy by default. When the junction temperature of the chip reaches 105 degrees, the chip will activate reset protection to prevent damage to itself.

Note: Please take appropriate heat dissipation measures based on your application scenario.

 

# 9.  Production Guide

## 9.1.  SMT process

Select modules that can be SMT or in-line packaged according to the customer's PCB design scheme. If the board is designed for SMT packaging, use SMT-packaged modules. If the board is designed for in-line assembly, use in-line assembly. Modules must be soldered within 24 hours of unpacking. If not, place them in a dry cabinet with a relative humidity of no more than 10% or re-pack them in a vacuum and record the exposure time (total exposure time must not exceed 168 hours).

Instruments or equipment required for SMT assembly：

l SMT Mounter

l SPI

l Reflow soldering

l Oven temperature tester

l AOI

Instruments or equipment required for baking:

l Cabinet ovens

l Antistatic high-temperature trays

l Antistatic and high-temperature gloves

## 9.2.  Module storage conditions:

Moisture-proof bags must be stored at a temperature <40°C and humidity <90% RH. Dry-packed products have a shelf life of 12 months from the date of sealing of the package—sealed packaging with a humidity indicator card.

![ZS3L Module Datasheet](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image018.jpg)

## 9.3.  Baking is required when:

The vacuum bag is found to be broken before unpacking.

After unpacking, the bag is found to be without a humidity indicator card.

The humidity indicator card reads 10% or more after unpacking, and the color ring turns pink.

Total exposure time after unpacking exceeds 168 hours.

More than 12 months from the date of the first sealed packaging.

**Baking parameters are as follows:**

Baking temperature: 60°C for reel packs, humidity less than or equal to 5% RH; 125°C for tray packs, humidity less than or equal to 5% RH (high-temperature-resistant trays, not blister packs for tow trays).

Baking time: 48 hours for reel packaging; 12 hours for pallet packaging.

Alarm temperature setting: 65°C for reel packs; 135°C for pallet packs.

After cooling to below 36°C under natural conditions, production can be carried out.

If the exposure time after baking is greater than 168 hours and not used up, bake again.

If the exposure time is more than 168 hours without baking, it is not recommended to use the reflow soldering process to solder this batch of modules. The modules are class 3 moisture-sensitive devices and may become damp when the exposure time is exceeded. This may lead to device failure or poor soldering when high-temperature soldering is carried out.

## 9.4.  ESD

Please protect the module from electrostatic discharge (ESD) during the entire production process.

## 9.5.  Conformity

To ensure product qualification rates, it is recommended to use SPI and AOI test equipment to monitor solder paste printing and placement quality.

## 9.6.  Recommended Furnace Temperature Profile

Please follow the reflow profile for SMT placement with a peak temperature of 245°C. The reflow temperature profile is shown below using the SAC305 alloy solder paste.

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image020.jpg)

**Description for graphs of curves.**

A: Temperature axis

B: Time axis

C: Alloy liquid phase line temperature: 217-220°C

D: Slope of temperature rise: 1-3°C/s

E: Constant temperature time: 60-120s, constant temperature: 150-200°C

F: Time above liquid phase line: 50-70s

G: Peak temperature: 235-245°C

H: the slope of temperature reduction: 1-4°C/s

Note: above-recommended curves are based on SAC305 alloy solder paste as an example. Please set the recommended oven temperature curve for other alloy solder pastes according to the solder paste specification.

## 9.7.  Storage

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image022.jpg)

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

## 9.8.  Order Information



| **Model**   | **RAM** | **eMMC** |
| ----------- | ------- | -------- |
| DSOM-070N-2 | 2GB     | 16GB     |
|             |         |          |



 
