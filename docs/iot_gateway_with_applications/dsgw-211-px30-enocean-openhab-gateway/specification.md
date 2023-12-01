# **DSGW-211 OpenHAB Enocean Gateway**

<div style="text-align: center;">
    <a href="javascript:window.print()" style="background-color: orange; color: black; border: none; padding: 10px 40px; font-size: 16px; text-decoration: none; display: inline-block; cursor: pointer;">Print</a>
</div>

## **Model List**

**Category A ( In Stock, Lead Time: 1~2 Weeks )**

| Model      | Wi-Fi 2.4G/5G | Bluetooth 5.2 | Li-Battery | LTE  | Zigbee 3.0 | Enocean |
| ---------- | ------------- | ------------- | ---------- | ---- | ---------- | ------- |
| DSGW-211-1 | ●             | ●             | ●          | ●    | ●          | ●       |

**Category C (Built by Order , Lead Time More Than 8 Weeks , MOQ: 500 )**

| Model      | Wi-Fi 2.4G/5G | Bluetooth  5.2 | Li-Battery | LTE  | Zigbee 3.0 | Enocean |
| ---------- | ------------- | -------------- | ---------- | ---- | ---------- | ------- |
| DSGW-211-2 |               | ●              | ●          | ●    | ●          | ●       |

# **1. Product Introduction**

## **1.1 Purpose and Description**

The DSGW-211 is a versatile smart gateway designed for building automation, home automation, and IoT applications, featuring compatibility with OpenHAB and support for multiple protocols such as Zigbee, Z-Wave, and Bluetooth 5.2. Its distinguishing feature is the support for the Enocean protocol, enabling integration with corresponding sub-devices and enhancing connectivity range. 

## **1.2.  Product Feature Summary**

* Support 5V USB type-c power supply

* Support IEEE802.11ac, IEEE802.11n, IEEE802.11g, IEEE 802.11b Protocol

* One WAN/LAN 100Mbps variable network port

* One USB2.0 port
* Backup lithium battery power

* Support LTE Cat1

* Support Bluetooth 5.2, Zigbee3.0（Matter）, and EnOcean

## **1.3. Hardware Block Diagram**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311271357165.png)

# **2. Mechanical Requirement**

## **2.1 Drawing**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311271359292.png)

## **2.2. Interface and Dimensions**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311271400938.png)

# **3. Specification**

## **3.1 Technical Specification**

| **Category**             | **Specifications**                                           |
| :----------------------- | :----------------------------------------------------------- |
| CPU                      | PX30 Quad-core Cortex A35                                    |
| System                   | Debian 11                                                    |
| RAM                      | 2GB                                                          |
| eMMC                     | 32GB                                                         |
| TF Card                  | Up to 128GB                                                  |
| Power Supply             | USB Type-C 5V/3A                                             |
| Reset                    | Factory reset button. To reset  the Gateway to its original factory settings, press and hold it for more than  10 seconds |
| Switch                   | On/Off power                                                 |
| Network Interface        | 1 * WAN/LAN 10/100 Mbps  variable                            |
| USB                      | 1* USB2.0                                                    |
| SIM  Card Slot           | 1  * Micro SIM Card slot                                     |
| TF  Card Slot            | 1  * TF Card slot                                            |
| Indicator LEDs(RGB)      | 1). Power & battery LED 2).  Wireless LED 3）LTE indicator   |
| Antenna                  | Zigbee PCB Antenna, Wi-Fi/ BLE/  LTE FPC Antenna, Enocean SMA Antenna |
| Li battery               | 5000 mAh                                                     |
| Installation      method | Flat, Ceiling, DIN                                           |
| RTC                      | Real-Time Clock operated from  an onboard battery            |
| Operating  Temperature   | -10℃~55℃                                                     |
| Storage  Temperature     | -20℃~65℃                                                     |
| Operating humidity       | 10%~90%                                                      |
| IP rating                | IP22                                                         |

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

- Highest Transmission Rate: 300Mbps

- Frequency offset: +/- 50KHZ

- Frequency Range (MHz): 2412.0~2483.5

- Low Frequency (MHz):2400

- High Frequency (MHz):2483.5

- E.i.r.p (Equivalent Isotopically Radiated power) (mW)<100mW

- Bandwidth (MHz):20MHz/40MHz

- Modulation: BPSK/QPSK, FHSSCCK/DSSS, 64QAM/OFDM

### **3.2.2 Bluetooth Performance**

- TX Power: 19.5dBm
- Range: 150 meters minimum, open filed
- Receiving Sensibility: -92dBm@0.1%BER
- Frequency offset: +/-20KHZ
- Frequency Range (MHz):2401.0~2483.5
- Low Frequency (MHz):2400
- High Frequency (MHz):2483.5
- E.i.r.p (Equivalent Isotopically Radiated power) (mW) < 10mW
- Bandwidth (MHz):2MHz 
- Modulation: GFSK

### **3.2.3 ZigBee（Thread） Performance**

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

### **3.2.4 Enocean Performance**

* Radio frequency:

​       868 MHz for Europe and other countries adopting RED

​       902 MHz for USA (FCC specification) and Canada (IC specification)

* EnOcean interface: TCM 310

* Transmit power: 3dBm maximum

* Receive sensitivity: -97 dBm

### **3.2.5 LTE Cat1**

* LTE FDD: B2/B4/B5/B12/B13

* WCDMA:B2/B4/B5

* LTE FDD Data rate:10(DL)/5(DL)

### **3.2.6 WAN/LAN**

10/100M bps

# **4. QA Requirement**

| **Information  Description** | **Standard(Yes)  Custom(No)** |
| ---------------------------- | ----------------------------- |
| ESD  Testing                 | Yes                           |
| RF  Antenna Analysis         | Yes                           |
| Environmental  Testing       | Yes                           |
| Reliability  Testing         | Yes                           |
| Certification                | FCC, CE,  RoHS                |
