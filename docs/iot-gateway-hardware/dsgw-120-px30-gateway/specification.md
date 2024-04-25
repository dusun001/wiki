# **DSGW-120V2 Smart Touch Panel Gateway **

<div style={{textAlign: 'center'}}>


<button onClick={() => window.print()} style={{ display: 'inline-block', backgroundColor: '#F6940B', color: '#ffffff', padding: '10px 25px',cursor:'pointer', textDecoration: 'none', borderRadius: '4px' }}>Print</button>

</div>

# **1. Product Introduction**

## **1.1 Purpose and Description**

The DSGW-120 Smart Touch Panel Gateway, equipped with a PX30 Quad Core ARM Cortex-A35 processor, is a multifunctional control panel designed to manage and optimize your smart home experience, allowing IoT Gateway developers to control all devices from a single location conveniently. It supports multiple protocols, including Zigbee and Z-Wave, and features a voice intercom function.

Boasting high programmability and comprehensive documentation, the DSGW-120 enables secondary development at the hardware level to create custom applications that meet your specific needs. This device is especially suited for developers creating Internet of Things (IoT) gateway solutions.

## **1.2Product Feature Summary**

**Unlock the Full Potential of Your Smart Home Automation with Powerful Hardware**

Featuring a powerful PX30 Quad Core ARM Cortex-A35 processor, an 8-inch IPS capacitive touchscreen display, 2GB RAM, and 8GB eMMC storage, it offers seamless performance and ample storage space for all your smart home needs.

**Multi-Protocol Support for Seamless Integration**

With the ability to communicate using protocols such as Zigbee 3.0, Z-Wave, Bluetooth 5.2, and Wi-Fi2.4. This device can work with various devices, regardless of their protocols.

**Built-in Microphone and Speaker**

With the built-in microphone and speaker, you can use voice commands to control your smart devices. Additionally, you can engage in two-way conversations with visitors through the camera doorbell utilizing the device.

**Compatible with various Home Automation Systems**

Designed to be compatible with kinds of home automation platforms, such as Home Assistant and openHAB, which are widely used open-source solutions for home automation. These platforms can easily integrate and manage many smart home devices.

**Effortless installation with convenient wall-mounting**

Designed for easy installation using wall mounting, which provides a clean and streamlined look, reducing clutter and enhancing the overall appearance of the space.

## **1.3 Hardware Block Diagram**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202403071748584.png)

# 2. Mechanical Requirement

## 2.1   Drawings

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202403071749809.png)

## 2.2   Dimension

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202403071750436.png)

# 3  Specification

## 3.1   Technical Specification

| Item          | Parameter                                                    |
| ------------- | ------------------------------------------------------------ |
| CPU           | PX30                                                         |
| RAM           | 2GB                                                          |
| eMMC          | 8GB                                                          |
| TF Card       | Up to 128GB                                                  |
| OS            | Android 11                                                   |
| Power Supply  | AC 12~24V/2A, DC Type C 5V/3A                                |
| Interface     | 1* 10/100 Mbps WLAN/LAN port，1*RS485                        |
| SIM           | 1 * Micro SIM   slot                                         |
| Camera        | 5 million   pixels， Panoramic depth camera                  |
| TF Card       | 1 * TF Card slot                                             |
| Speaker       | 1                                                            |
| Microphone    | 1                                                            |
| RTC           | Real-Time   Clock operated from the onboard battery          |
| Li Battery    | 1500 mAh                                                     |
| Auto Power-On | When the   primary power source is lost, the system's auto-power-on feature activates and   uses the battery. Similarly, when the primary power source is restored, the   system automatically switches back to it. |
| Reset Button  | Factory reset   button. To reset the Gateway to its original factory settings, press and hold   it for more than 10 seconds |
| Power Switch  | ON/OFF                                                       |
| Power LED     | When the   device powers on, the power indicator LED turns green. The indicator LED   switches to red if the battery is low |

## 3.2   Wireless Performance

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

### **3.2.2 ZigBee Performance**

* Range: 100 meters maximum, open field
* Transmit Power:17.5dBm
* Highest Transmission Rate: 2Mbps
* Frequency offset: +/- 20KHZ
* Receiving Sensibility:-94dBm
* Frequency Range (MHz):2401.0~2483.5
* Low Frequency (MHz):2400
* High Frequency (MHz):2483.5
* E.i.r.p (Equivalent Isotopically Radiated power) (mW)<100mW
* Bandwidth (MHz):5MHz
* Modulation: OQPSK

### **3.2.3 Bluetooth Performance**

- TX Power: 19.5dBm
- Range: 150 meters minimum, open filed
- Receiving Sensibility: -92dBm@0.1%BER
- Frequency offset: +/-20KHZ
- Frequency Range (MHz):2401.0~2483.5
- Low Frequency (MHz):2400
- High Frequency (MHz):2483.5
- E.i.r.p (Equivalent Isotopically Radiated power) (mW) < 10mW
-  Bandwidth (MHz):2MHz
- Bandwidth (MHz):2MHz Modulation: GFSK

### **3.2.4 Z-Wave Performance**

- TX power up to13dBm(20mW)
- RX sensitivity: @100kbps-97.5dBm
- Range: 100 meters maximum, open filed
- Default Frequency: 916MHz(Different country with different frequency)

### **3.2.5 Lte Cat1**

* LTE FDD: B2/B4/B5/B12/B13

* WCDM: B2/B4/B5

* LTE FDD Data rate:10(DL)/5(DL)

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

# **5. 1   Installation ( Wall Mounting)**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-120/Mount1.jpg)

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-120/Mount2.jpg)
