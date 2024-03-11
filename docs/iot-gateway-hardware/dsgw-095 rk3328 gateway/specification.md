# **DSGW-095  IoT Edge Computing Gateway**

# **Model List**

**Category A ( In Stock, Lead Time: 1~2 Weeks )**

| Model      | Wi-Fi | Ethernet | Bluetoth | Zigbee | Z-Wave | LTE Cat1 | LTE Cat M1 |
| ---------- | ----- | -------- | -------- | ------ | ------ | -------- | ---------- |
| DSGW-095-1 | ●     | ●        | ●        | ●      | ●      | ●        |            |

# 1. Product Introduction**

## **1.1 Purpose and Description**

The DSGW-095 is a Ceiling-Mounted Gateway utilized in smart home systems, the intelligent security industry, and pension service applications. Serving as a central Gateway, it supports various wireless protocols, including Wi-Fi, LTE, Zigbee 3.0, and BLE 5.2. This allows users to connect to the network through Wi-Fi, Ethernet, or cellular networks. Additionally, it facilitates the integration of smart sensors by supporting their connection via its multi-protocol features.

## **1.2 Product Feature Summary**

* OS: Debian 11
* USB 5V type-C and PoE power supply
* Processor: RK3328 Quad-core Cortex A53
* RAM: Up to 2GB
* eMMC: Up to 16GB
* Support IEEE802.11ac, IEEE802.11n, IEEE802.11g, IEEE 802.11b Protocol
* Support 4G LTE CATM1, CAT1
* Support Bluetooth 5.2, Zigbee3.0, Z-Wave, Wi-Fi 2.4/5G
* One WAN/LAN variable network port

## **1.3 Hardware Block Diagram**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202403061350518.png)

# **2. Product Detail**

## **2.1 Drawings**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/20240306135228-20240306135603847.png)

## **2.1 Interface and Dimension**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/20240306135807.png)

![](https://dusunprj.oss-us-west-1.aliyuncs.com/20240306135834.png)

# **3. Specification**

## **3.1 Technical Specification**

| Category              | Specifications                                               |
| --------------------- | ------------------------------------------------------------ |
| CPU                   | RK3328 Quad-core Cortex A53                                  |
| System                | Debian                                                       |
| RAM                   | Up to 2GB                                                    |
| Flash                 | Up to 16GB                                                   |
| TF Card               | Up to 128                                                    |
| Power   Supply        | USB   Type-C 5V/3A，PoE                                      |
| Reset                 | Factory reset button. To reset the Gateway to its original factory settings, press and hold it for more than 10 seconds |
| Network Interface     | 1 * WAN/ LAN 10/100 Mbps variable port                       |
| SIM                   | SIM Card Slot x 2                                            |
| TF                    | 1 * TF slot                                                  |
| WiFi                  | 2.4/5G（BL-M8821）                                           |
| LTE                   | CAT1（EG91）/CAT M1（BG96）                                  |
| Wireless              | Bluetooth 5.2（EFR32BG21）Zigbee3.0（EFR32MG21）Z-Wave（ZGM130S） |
| Indicator LEDs        | 1.Power(yellow): The yellow light stays on, that is the gateway is switched on. yellow light is off, that is the gateway is switched off   2.Network(yellow): It stays on after connecting to WIFI or LTE, otherwise it goes off   3.Wireless(yellow): It stays on long after connecting to Zigbee or Z-Wave, otherwise it goes off |
| RTC                   | Reserve                                                      |
| Antenna               | FPC Antenna                                                  |
| Installation method   | Flat，Ceiling                                                |
| Operating Temperature | -10℃~55℃                                                     |
| Storage Temperature   | -20℃~65℃                                                     |
| Operating humidity    | 10%~90%                                                      |
| IP rating             | IP22                                                         |



## **3.2 Communication Performance**

### **3.2.1 Wi-Fi Performance**

- IEEE Wireless LAN standard: IEEE802.11n, IEEE802.11g, IEEE802.11b

- Data Rate：

  - IEEE 802.11b Standard Mode:1,2,5.5,11Mbps

  - IEEE 802.11g Standard Mode:6,9,12,18,24,36,48,54 Mbps 

  - IEEE 802.11n: MCS0~MCS7 @ HT20/ 2.4GHz band

    ​                         MCS0~MCS7 @ HT40/ 2.4GHz band 

- Sensitivity:

  * HT40 MCS7: -70dBm@10% PER(MCS7) /2.4GHz band 
  * HT20 MCS7: -71dBm@10% PER(MCS7) /2.4GHz band

- Transmit Power:

  IEEE 802.11n: 16dBm @HT20/40 MCS7 /2.4GHzband 

  IEEE 802.11g: 16dBm @54MHz

  IEEE 802.11b: 18dBm@11MHz

- Wireless Security: WPA/WPA2, WEP, TKIP, and AES

- Working mode: Bridge、AP Client

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

- TX Power: 19.5dBm±1.5dBm
- Range: 120 meters minimum, open filed
- Receiving Sensibility: -92dBm@0.1%BER 1Mbps
- Frequency offset: +/-30KHZ
- Frequency Range (MHz):2405.0~2480
- Low Frequency (MHz):2400
- High Frequency (MHz):2483.5
- E.i.r.p (Equivalent Isotopically Radiated power) (mW) < 100mW
- Bandwidth (MHz):2MHz Modulation: GFSK

### **3.2.3 Zigbee Performance**

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

* TX power up to13dBm(20mW)
* RX sensitivity: @100kbps-97.5dBm
* Range: 100 meters maximum, open filed
* Default Frequency: 916MHz(Different country with different frequency)

### **3.2.5 LTE Cat1**

* LTE FDD: B2/B4/B5/B12/B13
* WCDMA:B2/B4/B5
* LTE FDD Data rate:10(DL)/5(DL)

### 3.2.6 LTE CatM1

* Operation Frequency Band: 850/900/1800/1900MHZ

* Global:LTE:FDD:B1/B2/B3/B4/B5/B8/B12/B13/B18/B19/B20/B26/B28

* North America: LTE TDD:B2/B4/B12/B13

* LTE TDD:B39(for cat.M1 only)

### **3.2.6 Ethernet**

* 10/100Mbps

# **4. QA Requirement**

| **Information Description** | **Standard(Yes) Custom(No)** |
| --------------------------- | ---------------------------- |
| ESD Testing                 | Yes                          |
| RF Antenna Analysis         | Yes                          |
| Environmental Testing       | Yes                          |
| Reliability Testing         | Yes                          |
| Certification               | FCC                          |




