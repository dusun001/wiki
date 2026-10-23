# DSGW-023 Dual-band Wi-Fi Smart Gateway Product Specification



![Embedded figure](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW-023/image1.jpeg)


## Model List

| Feature Mode | Wi-Fi 2.4G/5G | Bluetooth 5.2 | Zigbee3.0 | Z-Wave | LTE Cat4 |
| --- | --- | --- | --- | --- | --- |
| DSGW-023-1 | ● | ● | ● | ● | ● |
| DSGW-023-2 | ● | ● | ● | ● |  |
| DSGW-023-3 | ● | ● |  |  |  |
| DSGW-023-4 | ● |  | ● |  |  |


## 1. Introduction


### 1.1 Purpose& Description

DSGW-023 smart router gateway can be used as a Wi-Fi access point and IoT gateway. It offers continual high-speed data transmission for multiple devices at the same time. Built-in 880MHz MIPS® 1004KEc™ dual-core processor provides powerful data handling capacity to improve wireless transfer efficiency. <br />
Meanwhile, simultaneous dual band with middle power design on both bands makes wireless connection more flexible and stable, especially over long distance. Generally, DSGW-023 is designed for medium-size homes with increasing demand for high-speed Wi-Fi. <br />
DSGW-023 smart router gateway also can be a IoT gateway, it can support ZigBee, BLE, Z-Wave protocol and connect the IoT devices. <br />


### 1.2 Product Feature Summary


- Support 5V adapter power supply  <br />
- Support AC1200 Wi-Fi, IEEE802.11AC, IEEE802.11n, IEEE802.11g, IEEE 802.11b Protocol; <br />
- Support Bluetooth 5.2/SIG mesh; Zigbee3.0; Z-wave <br />
- Support 4G LTE CAT4 <br />
- Gigabit Ethernet port <br />


### 1.3 Hardware block diagram

![Embedded figure](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW-023/image7.jpeg)


## 2. Mechanical Requirement


### 2.1 Drawings

![Embedded figure](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW-023/image8.jpeg)


### 2.2 Dimension

![Embedded figure](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW-023/image9.jpeg)


## 3. Electrical Requirements


### 3.1 Hardware Information

| Category | Specifications |
| --- | --- |
| CPU | 880MHz MIPS® 1004KEc™ dual-core processor |
| RAM | 512MB |
| Flash | Nand flash 64MB |
| Storage | eMMC up to 8GB |
| USB | USB2.0 |
| Power Supply Port | Support DC Input, input Voltage range is 4.5V to 5V  <br />The power seat aperture is 3.5mm.  <br />The needle diameter is1.35 mm and is positive.  <br />Power adapter：100-240V    50/60HZ ， Output is 5V/2A |
| Reset button | The software reset button |
| Network Interface | WAN/LAN Port |
| Indicator LEDs | 1). Power LED normally on when powered on <br />2). Wireless LED normally on when connected <br />3). Wi-Fi LED normally on after connecting to Wi-Fi for 1-2 sec |
| Environment | Operating Temperature: 0℃~40℃ (32℉ ~104℉) <br />Storage Temperature: -40℃~70℃ (-40℉ ~158℉)  <br /> Operating Humidity: 10%~90% non-condensing  <br />Storage Humidity: 5%~90% non-condensing |


### 3.2 Performance Requirement


#### 3.2.1 Wireless Feature

| Category | Specification |
| --- | --- |
| Wi-Fi-Performance | - IEEE wireless LAN standard: IEEE802.11ac，  IEEE802.11n; IEEE802.11g; IEEE 802.11b <br />- Data Rate: <br />IEEE 802.11b Standard Mode:1,2,5.5,11Mbps <br />IEEE 802.11g Standard Mode:6,9,12,18,24,36,48,54 Mbps <br />IEEE 802.11n:    MCS0~MCS7 @ HT20/ 2.4GHz band <br />MCS0~MCS7 @ HT40/ 2.4GHz band <br />MCS0~MCS9 @ HT40/ 5GHz band <br />IEEE 802.11ac:    MCS0~MCS9 @ VHT80/ 5GHz band <br />- Sensitivity: VHT80 MCS9 : -60dBm@10% PER(MCS9) /5GHz band HT40 MCS9 : -63dBm@10% PER(MCS9) /5GHz band <br />HT40 MCS7 : -70dBm@10% PER(MCS7) /2.4GHz band <br />HT20 MCS7 : -71dBm@10% PER(MCS7) /2.4GHz band <br />- Transmit Power: <br />IEEE 802.11ac: 13dBm @HT80 MCS9 /5GHz band <br />IEEE 802.11ac: 16dBm @HT80 MCS0 /5GHz band <br />IEEE 802.11n: 14dBm @HT20/40 MCS7 /5GHz band <br />IEEE 802.11n: 16dBm @HT20/40 MCS0 /5GHz band <br />IEEE 802.11n: 16dBm @HT20/40 MCS7 /2.4GHz band <br />IEEE 802.11g: 16dBm @54MHz <br />IEEE 802.11b: 18dBm @11MHz <br />- Wireless Security: WPA/WPA2, WEP, TKIP, and AES <br />- Working mode : Bridge、Gateway、AP Client |
| ZigBee3.0 Performance | - TX Power: 17.5dBm <br />- Range: 100 meters minimum, open filed <br />- Receiving Sensibility:-94dBm <br />- Frequency offset: +/-20KHZ |
| Bluetooth Performance | - TX Power: 19.5dBm <br />- Bluetooth: 19.5dBm <br />- Range: 150 meters minimum, open filed <br />- Receiving Sensibility: -80dBm@0.1%BER <br />- Frequency offset: +/-20KHZ <br />- Frequency Range (MHz):2401.0~2483.5 <br />- Low Frequency (MHz):2400 <br />- High Frequency (MHz):2483.5 <br />- E.i.r.p (Equivalent Isotopically Radiated power) (mW)<10mW <br />- Bandwidth (MHz):2MHz <br />- Modulation: GFSK |
| Z-wave Performance | - TX power up to13dBm (20mW) <br />- RX sensitivity: @100kbps-97.5dBm <br />- Range: 100 meters minimum, open filed <br />- Default Frequency: 916MHz( Different country with different frequency) |
| Cellular network | - 4G FDD-LTE B1/B3/B7/B8/B20 (2100/1800/2600/900/800MHz) <br />- TDD-LTE B38/B39/B40/B41 (2600/1900/2300/2500MHz) <br />- 3G: DC-HSPA+/HSPA+/HSPA/UMTS B1/B8 (2100/900MHz) |
| Ethernet | - WAN port：10M/100M/1000M bps <br />- LAN port:   10M/100M/1000M bps |


## 4. QA Requirements


### 4.1 Quality Information

**Quality &Testing Information**

| Information Description | Standard(Yes) custom(No) |
| --- | --- |
| ESD Testing | Yes |
| RF Antenna Analysis | Yes |
| Environmental Testing | Yes |
| Reliability Testing | Yes |
| Bluetooth Certification | Yes |
| Zigbee Certification | Yes |
| Radio Certification | CE, FCC, IC, SRRC |


## 5. Development


### 5.1 System block diagram

![Embedded figure](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW-023/51.png)


Dusun provides SDK including the OpenWRT system, drivers and wireless protocol stack.


#### SDK Support

| System | Drivers | Protocol |
| --- | --- | --- |
| OpenWRT | UBOOT | ZigBee3.0 |
|  | UART | Z-Wave7.0 |
|  | SPI | BLE5.1 |
|  | I2C | LTE |
|  | USB |  |
|  | SDIO |  |
|  | Ethernet |  |
|  | OTA |  |


### 5.2 Development Environment and Tool

| Development Environment | Linux |
| --- | --- |
| Version | chaos_calmer/15.05.1/ |
| Development tool | Toolchain |


### 5.3 IoT Application Software

DUSUN develop IoT Application Software base on DSGW-023 ，if customer need the software ，customer can apply and purchase them


- Wi-Fi sniffer: Detect surrounding Wi-Fi devices.
- MQTT client: Convert wireless protocol to MQTT protocol.
- Beacon scanner: Scan and configure beacons
- LUCI Page: AP configuration, traffic detection, firewall, VPN configuration, APN settings ，IoT config


### 5.4 How to programmable


1. Customer can download the SDK from DUSUN ftp
2. Build your compilation environment
3. Refer to the development document "DSGW-023 SDK quick start guide".
4. Build firmware with your own software function
- Customers can implement routing function on the gateway


### 5.5 Software Feature

| Quality of Service | Prioritizes network traffic by device or application |
| --- | --- |
| Operating Modes | 3G/4G Router, Wireless Router |
| WAN Type | Dynamic IP/Static IP/PPPoE/PPTP(Dual Access)/L2TP(Dual Access) |
| Management | Access Control, Local Management, Remote Management <br />reboot schedule |
| DHCP | Server, Client, DHCP Client List, Address Reservation |
| Port Forwarding | Virtual Server, Port Triggering, UPnP, DMZ |
| Dynamic DNS | DynDns, NO-IP |
| VPN | PPTP VPN, IPSec VPN , OpenVPN |
| Access Control | Parental Control, Local Management Control |
| Firewall Security | DoS, SPI Firewall, IP Address Filter/Domain Filter, <br />IP and MAC Address Binding |
| Protocols | Supports IPv4 and IPv6 |
| Guest Network | 2.4GHz guest network x 1, 5GHz guest network x 1 |
| IPSec VPN | Supports up to 10 IPSec VPN tunnels |
| IoT protocol | Zigbee3.0 stack, BLE, Z-Wave |


## 6. Related products

| Picture | ![Embedded figure](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW-023/image10.png) | ![Embedded figure](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW-023/image11.png) | ![Embedded figure](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW-023/image12.png) | ![Embedded figure](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW-023/image13.jpeg) |  |
| --- | --- | --- | --- | --- | --- |
| Model | DSGW-023 | DSGW-021 | DSGW-201 | DSGW-075 |  
| System | OpenWRT | OpenWRT | OpenWRT | OpenWRT |  
| CPU | MT7621 | MT7628 | MT7621 | MT7628 |  
| RAM | 512MB | 128MB | 512MB | 128MB |  
| FLASH | 64MB | 16MB | 64MB | 16MB |  
| Storage | 8GB eMMC | / | 8GB eMMC | / |  
| Wi- Fi Frequency| 2.4G/5G | 2.4G | 2.4G/5G | 2.4G/5G |
| Wi- Fi Frequency | 1200Mbps | 300Mbps | 1200Mbps | 1200Mbps |
| Zigbee | ● | ● | ● | ● |  
| BLE | ● | ● | ● | ● |  
| Z-Wave | ● | ● | ● | ● |  
| LTE | ● | ● | ● |  |  
| Ethernet | 1000Mbps | 100Mbps | 1000Mbps | 100Mbps |  
| Installation | Flat ，Wall mounting | Flat ，Wall mounting | Ceiling | Plug |  
| Application | Router ，CPE | Router ，CPE | Router ，CPE | Repeater |  

