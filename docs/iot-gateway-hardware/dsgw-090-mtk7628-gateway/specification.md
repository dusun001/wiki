# **DSGW-090 Smart Ceiling LTE Gateway**

<div style={{textAlign: 'center'}}>


<button onClick={() => window.print()} style={{ display: 'inline-block', backgroundColor: '#F6940B', color: '#ffffff', padding: '10px 25px',cursor:'pointer', textDecoration: 'none', borderRadius: '4px' }}>Print</button>

</div>

## **Model List**

**Category A ( In Stock, Lead Time: 1~2 Weeks )**

| Model      | Wi-Fi 2.4G | Bluetooth 5.2 | Zigbee3.0 | Z-Wave | LTE Cat1 |
| ---------- | ---------- | ------------- | --------- | ------ | -------- |
| DSGW-090-2 | ●          | ●             | ●         |        | ●        |

**Category B (Built by Order, Lead Time: 3~4 Weeks)**

| Model      | Wi-Fi 2.4G | Bluetooth 5.2 | Zigbee3.0 | Z-Wave | LTE Cat1 |
| ---------- | ---------- | ------------- | --------- | ------ | -------- |
| DSGW-090-3 | ●          |               | ●         | ●      |          |
| DSGW-090-4 | ●          | ●             | ●         |        |          |
| DSGW-090-5 | ●          |               | ●         |        |          |

**Category C (Built by Order, Lead Time More Than 8 Weeks, MOQ: 500 )**

| Model      | Wi-Fi 2.4G | Bluetooth 5.2 | Zigbee3.0 | Z-Wave | LTE Cat1 |
| ---------- | ---------- | ------------- | --------- | ------ | -------- |
| DSGW-090-1 | ●          |               | ●         | ●      | ●        |
| DSGW-090-6 | ●          | ●             |           |        |          |
| DSGW-090-7 | ●          | ●             |           |        | ●        |

# **1. Product Introduction**

## **1.1 Purpose and Description**

The DSGW-090 is a Ceiling-Mounted Gateway utilized in smart home systems, the intelligent security industry, and pension service applications. Serving as a central Gateway, it supports various wireless protocols, including Wi-Fi 2.4G, Zigbee 3.0, and BLE 5.2. This allows users to connect to the network through Wi-Fi, Ethernet, or cellular networks. Additionally, it facilitates the integration of smart sensors by supporting their connection via its multi-protocol features.

## **1.2 Product Feature Summary**

* OS: OpenWrt
* USB 5V type-C and PoE power supply
* Processor: MTK7628AN (MIPS24KEc, 580MHz)
* RAM: 128MB
* Flash: 16MB
* Supports IEEE802.11n, IEEE802.11g, IEEE 802.11b protocols
* Supports Wi-Fi 2.4, Zigbee 3.0, and BLE 5.2
* Supports LTE Cat1
* One WAN/LAN variable network port

## **1.3  Hardware Block Diagram**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211505510.png)

# **2.  Mechanical Requirement**

## **2.1.  Drawings**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211506183.png)

## **2.2. Interface and Dimensions**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211507230.png)

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211508925.png)

# **3. Specification**

## **3.1 Technical Specification**

| Category              | Specifications                                               |
| --------------------- | ------------------------------------------------------------ |
| CPU                   | MT7628AN, MIPS24KEc, 580MHZ                                  |
| System                | OpenWrt                                                      |
| RAM                   | 128MB                                                        |
| Storage               | 16MB SPI Flash                                               |
| Power Supply          | USB Type-C 5V/2A, POE                                        |
| Indicator   LEDs      | 1). Power LED 2). Wireless LED   3）LTE indicator            |
| Antenna               | FPC Antenna                                                  |
| Interface             | TF   Card Slot x 1, SIM Card Slot x 2                        |
| Ethernet              | 1 * WAN/   LAN 10/100 Mbps variable port                     |
| Reset                 | Factory   reset button. To reset the Gateway to its original factory settings, press   and hold it for more than 10 seconds |
| Installation method   | Flat, Ceiling                                                |
| Weight                | TBD                                                          |
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

### **3.2.4 Lte Cat1**

* LTE FDD: B2/B4/B5/B12/B13

* WCDM: B2/B4/B5

* LTE FDD Data rate:10(DL)/5(DL)

### **3.2.5 Ethernet**

* 10/100Mbps

# **4. QA Requirement**

| **Information Description** | **Standard(Yes) Custom(No)** |
| --------------------------- | ---------------------------- |
| ESD Testing                 | Yes                          |
| RF Antenna Analysis         | Yes                          |
| Environmental Testing       | Yes                          |
| Reliability Testing         | Yes                          |
| Certification               | FCC,CE                       |
