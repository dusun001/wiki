# **DSGW-092  Smart Gateway**
<div style={{textAlign: 'center'}}>


<button onClick={() => window.print()} style={{ display: 'inline-block', backgroundColor: '#F6940B', color: '#ffffff', padding: '10px 25px',cursor:'pointer', textDecoration: 'none', borderRadius: '4px' }}>Print</button>

</div>

# **Model List**

**Category A ( In Stock, Lead Time: 1~2 Weeks )**

| Model      | LTE   Cat M1 | Wi-Fi   2.4G | Bluetoth5.2 | Zigbee3.0 |
| ---------- | ------------ | ------------ | ----------- | --------- |
| DSGW-092-1 | ●            | ●            | ●           |           |
| DSGW-092-2 |              | ●            | ●           |           |

**Category B (Built by Order, Lead Time: 3~4 Weeks)**

| Model      | LTE  Cat M1 | Wi-Fi  2.4G | Bluetoth5.2 | Zigbee3.0 |
| ---------- | ----------- | ----------- | ----------- | --------- |
| DSGW-092-3 | ●           | ●           |             | ●         |
| DSGW-092-5 |             | ●           |             | ●         |

# **1. Product Introduction**

## **1.1 Purpose and Description**

DSGW-092, based on ESP32, is designed for smart home systems, the intelligent security industry, and pension service applications. It supports multiple protocols, including Bluetooth 5.2(OR Zigbee 3.0), and Wi-Fi 2.4G, making it an ideal choice for IoT applications requiring the integration of a wide variety of devices and sensors. For example, it can collect data from various end devices (such as Bluetooth smart locks, Zigbee sensors, or medical sensors), process it locally, and then send it to a central server or cloud platform through LTE Cat M1 or Ethernet.

## **1.2 Product Feature Summary**

* Processor: ESP32
* OS: FreeRTOS
* USB 5V/2A type-C power supply
* Supports IEEE802.11n, IEEE802.11g, IEEE 802.11b protocol
* Supports Wi-Fi2.4, Zigbee 3.0, OR Bluetooth 5.2
* Supports LTE Cat M1
* One WAN/LAN 100Mbps variable network port

## **1.3 Hardware Block Diagram**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202403071708825.png)

# **2. Product Detail**

## **2.1 Drawings**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202403071727982.png)

## **2.1 Interface and Dimension**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211603118.png)

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211605430.png)

# **3. Specification**

## **3.1 Technical Specification**

| Category              | Specifications                                               |
| --------------------- | ------------------------------------------------------------ |
| CPU                   | ESP32                                                        |
| System                | FreeRTOS                                                     |
| RAM                   | 520 KB                                                       |
| Flash                 | 4   MB                                                       |
| Power   Supply        | USB   Type-C 5V/2A                                           |
| Indicator   LEDs      | Green   LED: Power LED normally on when powered on     Red   LED: BLE/Zigbee LED flash when the signal comes     Blue   LED: Wi-Fi LED normally on after connecting to network for 1-2 sec |
| Antenna               | LTE   FPC Antenna, Zigbee or Bluetooth PCB Antenna           |
| SIM                   | 1 * Micro SIM slot                                           |
| Ethernet              | 1   * 10/100Mbps WAN/LAN variable                            |
| Reset                 | Factory reset button. To reset the Gateway to its   original factory settings, press and hold it for more than 10 seconds |      |
| Wireless   protocol   | Wi-Fi   2.4G, Zigbee3.0 OR Bluetooth 5.2                     |
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
- Receiving Sensibility: -92dBm@0.1%BER
- Frequency offset: +/-20KHZ
- Frequency Range (MHz):2401.0~2483.5
- Low Frequency (MHz):2400
- High Frequency (MHz):2483.5
- E.i.r.p (Equivalent Isotopically Radiated power) (mW) < 10mW
- Bandwidth (MHz):2MHz Modulation: GFSK

### **3.2.3 BLE Performance(NRF52840)**

* TX Power: 8dBm
* Range: 150 meters maximum, open filed
* Receiving Sensitivity：

  - 103dBm at 125kbs,
  - 99dBm at 500kbs,
  - 96dBm at 1Mbs,
  - 92dBm at 2Mbs

* Frequency offset: +/-20KHZ
* Frequency Range (MHz):2401.0~2483.5

* Low Frequency (MHz):2400

* High Frequency (MHz):2483.5

### **3.2.4 Zigbee Performance**

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

### **3.2.5 LTE CatM1**

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
| Certification               | FCC,CE,RoHS                  |
