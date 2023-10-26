# **DSGW-290 Multi Protocol Host Gateway**

| **Rev.** | **Date**   | **Update Description** | **By**                       |      |
| -------- | ---------- | ---------------------- | ---------------------------- | ---- |
| 1.0      | 2023-08-10 | New version release    | New version release          | Xu   |

## **Model List**

**Category A ( In Stock, Lead Time: 1~2 Weeks )**

| **Model**  | **Wi-Fi 2.4G/5G** | **Bluetooth 5.2** | **Zigbee 3.0** | **Z-Wave** | **Tuya-Zigbee** | **LTE Cat4** | **Sub-G** |
| :--------: | :---------------: | :---------------: | :------------: | :--------: | :-------------: | :----------: | :-------: |
| DSGW-290-1 |         √         |         √         |       √        |     √      |                 |      √       |     √     |



**Category B (Built by Order, Lead Time: 3~4 Weeks)**

| **Model**  | **Wi-Fi 2.4G/5G** | **Bluetooth 5.2** | **Zigbee 3.0** | **Z-Wave** | **Tuya-Zigbee** | **LTE Cat4** | **Sub-G** |
| :--------: | :---------------: | :---------------: | :------------: | :--------: | :-------------: | :----------: | :-------: |
| DSGW-290-3 |         √         |         √         |                |            |                 |              |           |



**Category C (Built by Order , Lead Time More Than 8 Weeks , MOQ: 500 )**

| **Model**  | **Wi-Fi 2.4G/5G** | **Bluetooth 5.2** | **Zigbee 3.0** | **Z-Wave** | **Tuya-Zigbee** | **LTE Cat4** | **Sub-G** |
| :--------: | :---------------: | :---------------: | :------------: | :--------: | :-------------: | :----------: | :-------: |
| DSGW-290-2 |         √         |         √         |                |            |        √        |      √       |           |

---

# **1. Product Introduction**

## **1.1 Purpose and Description**

DSGW-290 is an IoT gateway featuring multiple protocols and edge computing capabilities(up to 1 TOPS). It ensures reliable connectivity for a broad array of wireless IoT devices. With its modular architecture, the gateway offers the flexibility to customize various features, delivering an off-the-shelf solution tailored to your specific requirements. Available options include `cellular`, `Bluetooth5.2`, `Wi-Fi 2.4G/5G`, `Ethernet`, `Zigbee3.0`, `Z-Wave`, `Sub-G`.

Otherwise, DSGW-290 supports rich video and audio interfaces, HMDI output and MIC output/input.Supports user scenarios with screen display.

## **1.2 Purpose and Description**

- Rich interface, highly expansion capacity
- Support multiple IoT wireless protocol: ZigBee 3.0, Bluetooth 5.2, Z-Wave, Sub-G
- Support audio and video interface, with powerful code capability 
- Built-in independent NPU with 1TOPS computing power, which provides a wealth of application scenarios



# **2. Product Detail**

## **2.1 Interface and Dimension**





## 2.2 Hardware Block Diagram




---



# **3. Specification**

## **3.1 Technical Specification**



| **Technical Specification**      |                                                              |
| -------------------------------- | ------------------------------------------------------------ |
| **Hardware & System Parameters** |                                                              |
| CPU                              | RK3568 Quad-core ARM Cortex-A55                              |
| GPU                              | ARM G52-2EE，Support OpenGL ES 1.1/2.0/3.2，OpenCL  2.0，Vulkan 1.1 |
| VPU                              | Support 4K  VP9 and 4K 10bits H265/H264 video decoding, up to 60fps 1080P multi-format  video decoding (WMV, MPEG-1/2/4, VP8)  1080P video  encoding, support H.264, VP8 format  Video post  processor: de-interlacing, denoising, edge/detail/color optimization |
| Power Management                 | RK808 PMU Power Management Unit                              |
| Operating System                 | Debian11                                                     |
| RAM                              | 4GB DDR4                                                     |
| eMMC                             | 64GB eMMC                                                    |
| **Electrical Characteristics**   |                                                              |
| Power Supply                     | DC 12V / 3A (Voltage error ±5%)  Supports PoE  (voltage range 44-57V) |
| Power Dissipation                | Standby power  dissipation: 0.015W  Typical power  dissipation: 2.9W  Maximum power  dissipation: 5.6W |
| **Interface Description**        |                                                              |
| Ethernet                         | 2 x 10/100/1000Mbps WAN/LAN variable port                    |
| SIM Slot                         | 1 x Micro SIM  card slot, support 4G LTE Cat4                |
| TF Slot                          | 1 x TF card  slot, up to 1TB                                 |
| USB Port                         | 1 x USB3.0, 1 x USB2.0, 1 x Type-C                           |
| Display                          | 1 x HDMI 2.0,  support 4K@60HZ output and HDCP 1.4/2.2  1 x MIPI-DSI,  support dual channel 2560 x 1600 @60fps output |
| Audio                            | 1 x 3.5mm Audio port                                         |
| PCIe                             | 1 x PCIe2.1  interface                                       |
| Debug                            | 1 x Debug serial port for development and debugging          |
| **General**                      |                                                              |
| Installation Method              | Flat                                                         |
| Indicator                        | - Power  Indicator: The green light stays on while the gateway is powered on <br />- Network Indicator: The  yellow light stays on when the gateway is connected to the MQTT server. The yellow  breathing light flashes when the connection to the MQTT server is lost<br />- LTE Indicator: The  yellow light slowly flashing when SIM card not inserted or SIM not available. The yellow light rapidly flashing when dial successfully <br />- Wi-Fi Indicator: The  yellow light stays on after the device is connected to the Internet, otherwise, the  yellow flashing light flashes. |
| Restart                          | Restart  gateway                                             |
| Shell  Material                  | ABS                                                          |
| Dimension (W  x D x H)           | 180.2mm (7.09")  x 100mm (3.9") x 47.56mm (1.8")             |
| Weight                           | 590g (20.8 oz)                                               |
| Operating Temperature            | 0℃ ~ 40℃                                                     |
| Storage  Temperature             | -20℃ ~ 70℃                                                   |
| Operating  Humidity              | 10% ~ 90%                                                    |


## **3.2 Communication Performance**

### **3.2.1 Wi-Fi Performance**

- IEEE wireless LAN standard: 
  - IEEE802.11ac
  - IEEE 802.11a
  - IEEE802.11n
  - IEEE802.11g
  - IEEE 802.11b
- Data Rate:
  - IEEE 802.11b Standard Mode:1,2,5.5,11Mbps
  - IEEE 802.11g Standard Mode:6,9,12,18,24,36,48,54 Mbps 
  - IEEE 802.11n: MCS0~MCS7 @ HT20/ 2.4GHz band
  - MCS0~MCS7 @ HT40/ 2.4GHz band 
  - MCS0~MCS9@ HT40/ 5GHz band
  - IEEE 802.11ac: MCS0~MCS9 @ VHT80/ 5GHz band
- Sensitivity:
  - VHT80 MCS9 : -60dBm@10% PER(MCS9) /5GHz band 
  - HT40 MCS9 : -63dBm@10% PER(MCS9) /5GHz band 
  - HT40 MCS7 : -70dBm@10% PER(MCS7) /2.4GHz band 
  - HT20 MCS7 : -71dBm@10% PER(MCS7) /2.4GHz band
- Transmit Power:
  - IEEE 802.11ac: 13dBm @HT80 MCS9 /5GHzband 
  - IEEE 802.11ac: 16dBm @HT80 MCS0 /5GHz band
  - IEEE 802.11n: 14dBm @HT20/40 MCS7 /5GHz band 
  - IEEE 802.11n: 16dBm @HT20/40 MCS0 /5GHz band 
  - IEEE 802.11n: 16dBm @HT20/40 MCS7 /2.4GHz band 
  - IEEE 802.11g: 16dBm @54MHz
  - IEEE 802.11b: 18dBm @11MHz
- Wireless Security: WPA/WPA2, WEP, TKIP, and AES
- Working mode: Bridge、Gateway、AP Client
- Range: 50 meters maximum, open field
- Transmit Power: 17dBm
- Highest Transmission Rate: 300Mbps
- Frequency offset: +/- 50KHZ
- Frequency Range (MHz): 2412.0~2483.5
- Low Frequency (MHz): 2400
- High Frequency (MHz): 2483.5
- E.i.r.p (Equivalent Isotopically Radiated power) (mW) < 100mW
- Bandwidth (MHz):20MHz/40MHz
- Modulation: BPSK/QPSK, FHSSCCK/DSSS, 64QAM/OFDM



### **3.2.2 Bluetooth Performance**

- TX Power: 19.5dBm
- Range: 150 meters minimum, open filed
- Receiving Sensibility: -80dBm@0.1%BER
- Frequency offset: +/-20KHZ
- Frequency Range (MHz):2401.0~2483.5
- Low Frequency (MHz):2400
- High Frequency (MHz):2483.5
- E.i.r.p (Equivalent Isotopically Radiated power) (mW) < 10mW
- Bandwidth (MHz):2MHz Modulation: GFSK


### **3.2.3 ZigBee Performance**

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


### **3.2.4 Z-Wave Performance**

- TX power up to13dBm(20mW)
- RX sensitivity: @100kbps-97.5dBm
- Range: 100 meters maximum, open filed
- Default Frequency: 916MHz(Different country with different frequency)


### **3.2.5 Lte Cat4 Performance**

- LTE-FDD: B1/B2/B3/B4/B5/B7/B8/B12/B13/B18/B19/B20/B25/B26/B28
- LTE-TDD: B38/B39/B40/B41
- WCDMA: B1/B2/B4/B5/B6/B8/B19
- GSM: B2/B3/B5/B8

### **3.2.6 Sub-G Performance**

- TX Power: 14dBm
- Range: 100 meters minimum, open filed 
- Receiving Sensibility:-94dBm

---

# **4. QA Requirement**

| **Information Description** | **Standard(Yes) Custom(No)** |
| --------------------------- | ---------------------------- |
| ESD Testing                 | Yes                          |
| RF Antenna Analysis         | Yes                          |
| Environmental Testing       | Yes                          |
| Reliability Testing         | Yes                          |
| Certification               | FCC,CE,RoHS                  |

---

# **5. Package Information**

## **5.1. BOM List**

| **Accessory**   | **Quantity** |
| --------------- | ------------ |
| Gateway         | 1            |
| Power Adapter   | 1            |
| Changeover Plug | 1            |
| Network Cable   | 1            |
| Type-C Cable    | 1            |
| HDMI Cable      | 1            |
| User Manual     | 1            |
| Package         | 1            |
| Lining          | 1            |
| Accessory Box   | 1            |

## **5.2 Package**

| Packing Quantity | 1 Box（24 pcs）    |
| ---------------- | ------------------ |
| Packing Size     | 465 × 544 × 324 mm |
| Gross Weight     | /                  |


