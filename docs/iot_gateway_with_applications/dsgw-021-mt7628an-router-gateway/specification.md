# **DSGW-021 LTE Cat4 Router Gateway**

<div style={{textAlign: 'center'}}>

<button onClick={() => window.print()} style={{ display: 'inline-block', backgroundColor: '#F6940B', color: '#ffffff', padding: '10px 25px',cursor:'pointer', textDecoration: 'none', borderRadius: '4px' }}>Print</button>

</div>

## **Model List**

**Category A ( In Stock, Lead Time: 1~2 Weeks )**

| Feature     Mode | Wi-Fi 2.4G/5G | LTE Cat4 | BLE 5.2 | Zigbee 3.0 |
| ---------------- | ------------- | -------- | ------- | ---------- |
| DSGW-021-2       | ●             | ●        | ●       |            |
| DSGW-021-5       | ●             | ●        | ●       | ●          |

**Category B (Built by Order, Lead Time: 3~4 Weeks)**

| Feature     Mode | Wi-Fi 2.4G/5G | LTE Cat4 | BLE 5.2 | Zigbee 3.0 |
| ---------------- | ------------- | -------- | ------- | ---------- |
| DSGW-021-3       | ●             | ●        |         | ●          |

**Category C (Built by Order , Lead Time More Than 8 Weeks , MOQ: 500 )**

| Feature     Mode | Wi-Fi 2.4G/5G | LTE Cat4 | BLE 5.2 | Zigbee | Z-Wave |
| ---------------- | ------------- | -------- | ------- | ------ | ------ |
| DSGW-021-1       | ●             | ●        |         |        |        |
| DSGW-021-4       | ●             | ●        |         |        | ●      |

# **1. Product Introduction**

## **1.1 Purpose and Description**

The DSGW-021 LTE Cat4 Router Gateway is designed for IoT Gateway developers and complies with the latest IEEE 802.11ac Wi-Fi standard. It delivers consistent high-speed data transmission for multiple devices simultaneously. 

With its dual-band design, it facilitates versatile and stable wireless connections over long distances. Ideally suited for medium-sized homes, This router gateway also supports BLE5.2, and Zigbee, enabling it to connect with end devices that support different protocols. Potential usage scenarios include home use, smart home integration, small business offices, remote work settings, Internet of Things (IoT) applications, and educational environments. 

Further, with pre-integrated, comprehensive, and fully documented out-of-the-box guidance and support, developers can create a custom firmware, starting from the lowest layer of the hardware

## **1.2  Product Feature Summary**

* **4G CAT4 Network**: shares internet access with up to 64 Wi-Fi devices and enjoys download speeds of up to 150 Mbps.

* **AC1200 Wi-Fi**: creates simultaneous dual-band Wi-Fi networks, with maximum speeds of up to 300 Mbps on the 2.4 GHz band and 867 Mbps on the 5 GHz band.

* **Plug a SIM Card and Play**: No configurations are needed; compatibility with SIM cards in over 100 countries is assured by years of field testing.

* **Two Detachable Advanced LTE Antennas**: Enjoy stable and efficient connections to every device, thanks to the two external antennas.

* **Wi-Fi Router Mode**: Plug an Ethernet cable into the WAN port. You have flexible access as a backup option if you can't get a 4G connection.

* **Supports multiple Protocols:** BLE5.2, Zigbee3.0.

## **1.3  Hardware Block Diagram**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-021/block.png)

# **2.  Mechanical Requirement**

## **2.1.  Drawings**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-021/draw.png)

## **2.2. Interface and Dimensions**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-021/dimen.jpg)

# **3. Specification**

## **3.1 Technical Specification**

|      **Category**      | **Specifications**                                           |
| :--------------------: | ------------------------------------------------------------ |
|          CPU           | MT7628AN 600MHz processor                                    |
|           OS           | OpenWrt                                                      |
|          RAM           | 128MB                                                        |
|         Flash          | 16MB                                                         |
|      Power Supply      | DC  input with a voltage range of 4.5V to 5V.   The  power seat aperture is 3.5mm       and the needle diameter is 1.35mm, with a  positive polarity. |
|         Reset          | Factory  reset button. To reset the Gateway to its original factory settings, press  and hold it for more than 10 seconds |
|          SIM           | 1 *  Micro SIM slot                                          |
|       Interface        | 1 * 10/100Mbps LAN  Port  <br /> 1 * 10/100Mbps WAN  Port    |
|     Indicator LEDs     | The Zigbee/BLE LED  flashes when a signal is received.<br />The Network LED  indicates RED when no establishing a network connection.<br />The Network LED  indicates GREE when a network connection is established. |
|        Antenna         | 1 * 4G LTE FPC antenna，2 * 2.4G/5G External  On-Board antenna |
|      Installation      | Flat, Ceiling                                                |
|         Weight         | TBD                                                          |
| Operating  Temperature | -10℃~55℃                                                     |
|  Storage  Temperature  | -40℃~65℃                                                     |
|   Operating Humidity   | 10%~90% non-condensing                                       |
|    Storage Humidity    | 5%~90% non-condensing                                        |
|       IP Rating        | IP 22                                                        |

## **3.2 Communication Performance**

### **3.2.1 Wi-Fi Performance**

- IEEE Wireless LAN standard: IEEE802.11ac, IEEE802.11n, IEEE802.11g, IEEE802.11b

- Data Rate：

  - IEEE 802.11b Standard Mode:1,2,5.5,11Mbps

  - IEEE 802.11g Standard Mode:6,9,12,18,24,36,48,54 Mbps 

  - IEEE 802.11n: MCS0~MCS7 @ HT20/ 2.4GHz band

    ​                         MCS0~MCS7 @ HT40/ 2.4GHz band 

    ​                         MCS0~MCS9 @ HT40/ 5GHz band

  - IEEE 802.11ac: MCS0~MCS9 @ VHT80/ 5GHz band

- Sensitivity:

  - VHT80 MCS9: -60dBm@10% PER(MCS9) /5GHz band 
  - HT40 MCS9: -63dBm@10% PER(MCS9) /5GHz band
  - HT40 MCS7: -70dBm@10% PER(MCS7) /2.4GHz band 
  - HT20 MCS7 : -71dBm@10% PER(MCS7) /2.4GHz band

- Transmit Power:

  - IEEE 802.11ac: 13dBm @HT80 MCS9 /5GHz band 
  - IEEE 802.11ac: 16dBm @HT80 MCS0 /5GHz band 
  - IEEE 802.11n: 14dBm @HT20/40 MCS7 /5GHz band 
  - IEEE 802.11n: 16dBm @HT20/40 MCS0 /5GHz band 
  - IEEE 802.11n: 16dBm @HT20/40 MCS7 /2.4GHzband 
  - IEEE 802.11g: 16dBm @54MHz
  - IEEE 802.11b: 18dBm @11MHz

- Wireless Security: WPA/WPA2, WEP, TKIP, and AES

- Working mode: Bridge, AP Client

- Range: 50 meters maximum, open field

- Transmit Power:17dBm

- Highest Transmission Rate: 300Mbps

- Frequency offset: +/- 50KHZ

- Frequency Range (MHz): 2412.0~2483.5

- Low Frequency (MHz):2400

- High Frequency (MHz):2483.5

- E.i.r.p (Equivalent Isotopically Radiated power) (mW)<100mW

- Bandwidth (MHz):20MHz/40MHz

- Modulation: BPSK/QPSK, FHSSCCK/DSSS, 64QAM/OFDM

### **3.2.2 ZigBee Performance**

- TX Power: 17.5dBm
- Range: 100 meters maximum, open filed
- Receiving Sensibility: -94dBm
- Frequency offset: +/-20KHZ
- Frequency Range (MHz):2400.0~2483.5
- Low Frequency (MHz):2400
- High Frequency (MHz):2483.5
- E.i.r.p (Equivalent Isotopically Radiated power) (mW)<100mW
- Bandwidth (MHz):5MHz
- Modulation: OQPSK

### **3.2.3 Bluetooth Performance（EFR32MG21）**

* TX Power: 19.5dBm

* Range: 150 meters maximum, open filed

* Receiving Sensibility: [-92dBm@0.1%BER](mailto:-92dBm@0.1%BER), 1Mbps

* Frequency offset: +/-20KHZ

* Frequency Range (MHz):2401.0~2483.5

* Low Frequency (MHz):2400

* High Frequency (MHz):2483.5

* E.i.r.p (Equivalent Isotopically Radiated power) (mW)<10mW

* Bandwidth (MHz):2MHz

* Modulation: GFSK

### **3.2.3 Bluetooth Performance（NRF52840）**

* TX Power: 10dBm

* Range: 100 meters minimum, open filed

* Receiving Sensibility: -90dBm@0.1%BER

* Frequency offset: +/-20KHZ

* Frequency Range (MHz):2401.0~2483.5

* Low Frequency (MHz):2400

* High Frequency (MHz):2483.5

* E.i.r.p (Equivalent Isotopically Radiated power) (mW)<10mW

* Bandwidth (MHz):2MHz

* Modulation: GFSK

### **3.2.4 Data**

  Max.  150Mbps downlink / 50Mbps Uplink Under LTE  

## **3.3 Software Feature**

| Quality of Service | Prioritizes network traffic by   device or application       |
| ------------------ | ------------------------------------------------------------ |
| Operating Modes    | 3G/4G Router, Wireless Router                                |
| WAN Type           | Dynamic IP/Static   IP/PPPoE/PPTP(Dual Access)/L2TP(Dual Access) |
| Management         | Access Control, Local   Management, Remote Management（TR069）reboot schedule |
| DHCP               | Server, Client, DHCP Client   List, Address Reservation      |
| Port Forwarding    | Virtual Server, Port   Triggering, UPnP, DMZ                 |
| Dynamic DNS        | DynDns, NO-IP                                                |
| VPN                | PPTP VPN, IPSec VPN , OpenVPN                                |
| Access Control     | Parental Control, Local   Management Control                 |
| Firewall Security  | DoS, SPI Firewall, IP Address   Filter/Domain Filter, IP and MAC Address Binding |
| Protocols          | Supports IPv4 and IPv6                                       |
| Guest Network      | 2.4GHz guest network x 1, 5GHz   guest network x 1           |
| IPSec VPN          | Supports up to 10 IPSec VPN   tunnels                        |

# **4. Web Management**

## **4.1 Login**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-021/login.jpg)

## **4.2  Modify the Password**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-021/modify.jpg)

## **4.3  Router Status**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-021/router.jpg)

## **4.4. Internet Setting**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-021/internet.jpg)

## **4.5. Wi-Fi Setting**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-021/wifi.jpg)

## **4.6. LAN Setting**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-021/lan.jpg)

## **4.7. Security Policy**

### **4.7.1.   MAC Filter**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-021/MAC.jpg)

### **4.7.2. Domain Name Filter**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-021/domain.jpg)

### **4.7.3. DMZ**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-021/DMZ.jpg)

# **4.8. Advanced Setting**

### **4.8.1.   Firmware Update**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-021/firmware%20.jpg)

### **4.8.2.   Factory Setting**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-021/factory.jpg)

# **5. Development**

## 5.1. System Block Diagram

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-021/system%20blockpng.png)

Dusun provides an SDK that includes the OpenWRT system, drivers, and the wireless protocol stack.

## **5.2. SDK Support**

| System  | Drivers  | Protocol  |
| ------- | -------- | --------- |
| OpenWRT | UBOOT    | Zigbee3.0 |
|         | UART     | BLE 5.2   |
|         | SPI      | LTE CAT4  |
|         | I2C      |           |
|         | USB      |           |
|         | SDIO     |           |
|         | Ethernet |           |
|         | OTA      |           |

## **5.3. Development Enviroment and Tool**

| Development   Environment | Linux                 |      |
| ------------------------- | --------------------- | ---- |
| Version                   | Chaos_calmer/15.05.1/ |      |
| Development Tool          | Toolchain             |      |

## **5.4. IoT Application Software**

Dusun develops IoT application software based on DSGW-021. If customers need this software, they can apply for and purchase it.

* Wi-Fi: Detects surrounding Wi-Fi devices.

* MQTT Client: Converts wireless protocol to MQTT protocol.

*  Beacon Scanner: Scans and configures beacons.

*  LUCI Page: Facilitates AP configuration, traffic detection, firewall settings, VPN configuration, APN settings, and IoT configuration

## **5.5. How to Program**

1. Customers can download the SDK from Dusun's Website.
2. Build your compilation environment.
3. Refer to the development document, "DSGW-021 SDK Quick Start Guide".
4. Build firmware with your desired software functions.

## **5.6. Software Feature**

Customers can implement the routing function on the gateway.

| Feature            | Details                                                      |
| ------------------ | ------------------------------------------------------------ |
| Quality of Service | Prioritizes network traffic by device or   application       |
| Operating Modes    | Functions as a 3G/4G Router and Wireless   Router            |
| WAN Type           | Supports Dynamic IP, Static IP, PPPoE,   PPTP (Dual Access), L2TP (Dual Access) |
| Management         | Provides access control, local   management, remote management, and reboot scheduling |
| DHCP               | Includes a server, client, DHCP client   list, and address reservation |
| Port Forwarding    | Offers virtual server, port triggering,   UPnP, and DMZ      |
| Dynamic DNS        | Compatible with DynDns and NO-IP                             |
| VPN                | Supports PPTP VPN, IPSec VPN, and OpenVPN                    |
| Access Control     | Features parental control and local   management control     |
| Firewall Security  | Provides DoS, SPI Firewall, IP address   filter/domain filter, IP and MAC address binding |
| Protocols          | Supports both IPv4 and IPv6                                  |
| Guest Network      | Allows for a 2.4GHz guest network x 1 and   a 5GHz guest network x 1 |
| IPSec VPN          | Supports up to 10 IPSec VPN tunnels                          |
| IoT protocol       | Zigbee3.0, BLE 5.2                                           |
