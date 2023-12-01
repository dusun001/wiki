# DSGW-230 **IoT Ceiling Edge Computing Gateway**

<div style={{textAlign: 'center'}}>


<button onClick={() => window.print()} style={{ display: 'inline-block', backgroundColor: '#F6940B', color: '#ffffff', padding: '10px 25px',cursor:'pointer', textDecoration: 'none', borderRadius: '4px' }}>Print</button>

</div>

## **Model List**

**Category A ( In Stock, Lead Time: 1~2 Weeks )**

| Model       | Wi-Fi   2.4G/5G | Bluetooth   5.2 | Zigbee   3.0 | Z-Wave | LoRa | LTE   Cat1 |
| ----------- | --------------- | --------------- | ------------ | ------ | ---- | ---------- |
| DSGW-230-11 | ●               | ●               | ●            | ●      | ●    | ●          |

**Category B (Built by Order, Lead Time: 3~4 Weeks)**

| Model       | Wi-Fi   2.4G/5G | Bluetooth   5.2 | Zigbee   3.0 | Z-Wave | LoRa | LTE   Cat1 |
| ----------- | --------------- | --------------- | ------------ | ------ | ---- | ---------- |
| DSGW-230-11 | ●               | ●               | ●            | ●      | ●    | ●          |

**Category C (Built by Order , Lead Time More Than 8 Weeks , MOQ: 500 )**

| Model       | Wi-Fi   2.4G/5G | Bluetooth   5.2 | Zigbee   3.0 | Z-Wave | LoRa | LTE   Cat1 |
| ----------- | --------------- | --------------- | ------------ | ------ | ---- | ---------- |
| DSGW-230-11 | ●               | ●               | ●            | ●      | ●    | ●          |

# **1. Product Introduction**

## **1.1 Purpose and Description**

The DSGW-230 is a multi-protocol IoT gateway with edge computing capabilities. This intelligent gateway can be powered via PoE (Power over Ethernet) or a USB Type-C connection. It provides reliable connectivity for a wide range of wireless IoT devices. 

With its modular architecture, the DSGW-230 allows for extensive customization of its features, providing an off-the-shelf solution tailored to your needs. Connectivity options include LTE, Bluetooth, Wi-Fi, Ethernet, Zigbee, Z-Wave, and LoRa.

## **1.2. Product Feature Summary**

* Support IEEE802.11ac, IEEE802.11n, IEEE802.11g, IEEE 802.11b Protocol
* Support 4G LTE CAT1
* LoRaWAN Frequency Band: RU864, IN865, EU868, US915, AU915, KR920, AS923, CN470
* Support Bluetooth 5.2, Zigbee3.0, Z-Wave, Wi-Fi 2.4/5G
* One Gigabit WAN/LAN variable network port
* One USB 2.0

## **1.3.Hardware Block Diagram**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211315775.png)

# **2. Mechanical Requirement**

## **2.1.  Drawings**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211318166.png)

## **2.1.  Interface **

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211319135.png)

# **3.  Specification**

## **3.1.  Technical Specification**

| **Category**           | **Specifications**                                           |
| ---------------------- | ------------------------------------------------------------ |
| CPU                    | RK3328 Quad-core  Cortex A53                                 |
| System                 | Debian 11                                                    |
| RAM                    | 2GB                                                          |
| eMMC                   | 32GB                                                         |
| SD card                | Up to  128GB                                                 |
| Power  Supply          | DC  12V/1.5A                                                 |
| Reset                  | Factory  reset button. To reset the Gateway to its original factory settings, press  and hold it for more than 10 seconds |
| User-Defined  button   | Support                                                      |
| Switch                 | On/Off  power                                                |
| Network Interface      | CAT-5/CAT-5e cables for data  transmission and PoE Supply with a voltage range of 44 to 57V  <br />1 * 1000M WAN/LAN variable port |
| USB                    | USB2.0  Type-C                                               |
| SIM Card  Slot         | Dual Micro SIM card slots, link  backup capability, Dual card with single standby mode<br />Dimensions: 12mm x 15mm |
| TF Card Slot           | 1                                                            |
| Indicator  LEDs (RGB)  | 1).  Power LED 2). Wireless LED 3）LTE indicator             |
| Antenna                | Zigbee/BLE  PCB, Z-Wave/Wi-Fi FPC Antenna                    |
| Li Battery             | 5000 mAh                                                     |
| Installation  method   | Flat,  Ceiling                                               |
| RTC                    | Real-Time  Clock operated from an onboard battery            |
| Hardware  Encryption   | ECC608B                                                      |
| Operating  Temperature | -10℃~55℃                                                     |
| Storage  Temperature   | -40℃~65℃                                                     |
| Operating  Humidity    | 10%~90%                                                      |
| IP Rating              | IP22                                                         |

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

* Sensitivity:
  - VHT80 MCS9: -60dBm@10% PER(MCS9) /5GHz band 
  - HT40 MCS9: -63dBm@10% PER(MCS9) /5GHz band
  - HT40 MCS7: -70dBm@10% PER(MCS7) /2.4GHz band 
  - HT20 MCS7 : -71dBm@10% PER(MCS7) /2.4GHz band

●    **Transmit Power:**

IEEE 802.11ac: 13dBm @HT80 MCS9 /5GHz band 

IEEE 802.11ac: 16dBm @HT80 MCS0 /5GHz band 

IEEE 802.11n: 14dBm @HT20/40 MCS7 /5GHz band 

IEEE 802.11n: 16dBm @HT20/40 MCS0 /5GHz band 

IEEE 802.11n: 16dBm @HT20/40 MCS7 /2.4GHz band 

IEEE 802.11g: 16dBm @54MHz

IEEE 802.11b: 18dBm @11MHz

●    Wireless Security: WPA/WPA2, WEP, TKIP, and AES

●    Working mode: Bridge, AP Client

●    Range: 50 meters maximum, open field

●    Transmit Power:17dBm

●    Highest Transmission Rate: 300Mbps

●    Frequency offset: +/- 50KHZ

●    Frequency Range (MHz): 2412.0~2483.5

●    Low Frequency (MHz):2400

●    High Frequency (MHz):2483.5

●    E.i.r.p (Equivalent Isotopically Radiated power) (mW)<100mW

●    Bandwidth (MHz):20MHz/40MHz

Modulation: BPSK/QPSK, FHSSCCK/DSSS, 64QAM/OFDM

### **3.2.2 Bluetooth Performance**

- TX Power: 19.5dBm
- Range: 100 meters minimum, open filed
- Receiving Sensibility: -92dBm@0.1%BER, 1Mbps
- Frequency offset: +/-20KHZ
- Frequency Range (MHz):2401.0~2483.5
- Low Frequency (MHz):2400
- High Frequency (MHz):2483.5
- E.i.r.p (Equivalent Isotopically Radiated power) (mW) < 10mW
- Bandwidth (MHz):2MHz 
- Modulation: GFSK

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

### **3.2.5 LoRaWAN Performance**

* Frequency band support: RU864, IN865, EU868, US915, AU915, KR920, AS923, CN470
* TX power up to 27dBm, RX sensitivity down to -139dBm @SF12, BW125kHz
* Range: 10KM maximum, open field
* Protocol: V1.0 Class A/Class C and V1.0.2 Class A/Class C
* LoRa Antenna gain：3/5dBi optional
* LoRa Antenna Type： Omnidirectional
* LoRa working mode： Full/half-duplex (optional)

### **3.2.6 Lte Cat1**

- LTE FDD: B2/B4/B5/B12/B13
- WCDMA:B2/B4/B5
- LTE FDD Data rate:10(DL)/5(DL)

### **3.2.7 WAN/LAN**

- 100/1000Mbps

# **4. QA Requirement**

| Information Description | Standard(Yes) Custom(No) |
| :---------------------: | :----------------------: |
|       ESD Testing       |           Yes            |
|   RF Antenna Analysis   |           Yes            |
|  Environmental Testing  |           Yes            |
|   Reliability Testing   |           Yes            |
|      Certification      |    FCC, CE, RoHS,BQB     |

# **5. QA Requirement**

| System         | System/Driver    | Support            |
| -------------- | ---------------- | ------------------ |
|                | Ubuntu           | ●                  |
|                | Debian11         | ●                  |
| Driver         | Uboot            | ●                  |
|                | UART             | ●                  |
|                | SPI              | ●                  |
|                | I2C              | ●                  |
|                | USB              | ●                  |
|                | eMMC             | ●                  |
|                | PCIe             | ●                  |
|                | Ethernet         | ●                  |
|                | SDIO             | ●                  |
|                | SPI              | ●                  |
|                | I2C              | ●                  |
|                | USB              | ●                  |
| Protocol Stack | Zigbee3.0        | ●                  |
|                | BLE5.2           | ●                  |
|                | Z-Wave           | ●                  |
|                | Wi-Fi   2.4/5G   | ●                  |
| Application    | Wi-Fi   Sniffer  | Demo   source code |
|                | Zigbee3.0        | Demo   source code |
|                | Beacon   Scanner | Demo   source code |
|                | MQTT   Client    | Demo   source code |
|                | Z-Wave   APP     | Demo   source code |
