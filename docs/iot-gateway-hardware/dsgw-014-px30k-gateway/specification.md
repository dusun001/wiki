# DSGW-014 Outdoor LoRa Gateway

## Model List

**Category A (In Stock, Lead Time: 1~2 Weeks)**


# 1. Product Introduction

## 1.1. Purpose and Description
The DSGW-014 is a versatile outdoor LoRa Gateway that supports PoE (Power over Ethernet) and DC power supply options. It is designed to handle multiple protocols, including Wi-Fi 2.4G, BLE 5.2, LoRa and LTE Cat1/Cat M1, making it suitable for various scenarios. Its durable construction ensures reliable performance in diverse environments, from smart cities to industrial applications.

Besides, the DSGW-014 offers local deployment with public LoRaWAN Network Services such as The Things Stack and Chirpstack. This adaptability allows for reduced development time and a faster time to market, making it an ideal choice for various IoT applications and scenarios.

## 1.2. Product Feature Summary 
- Based on the LoRa Concentrator Engine: Semtech SX1302
- TX power up to 27dBm, RX sensitivity down to -139dBm @SF12, BW125kHz
- LoRa Frequency band support:  RU864, IN865, EU868, US915, AU915, KR920, AS923, CN470
- One WAN/LAN variable network port
- Support the POE Power supply
- Support BLE 5.2, Wi-Fi 2.4G IEEE 802.11b/g/n
- Support GPS，GLONASS，Galileo and QZSS
- Support IP66 waterproof housing
- Support OTA
- Support LTE Cat1/Cat M1

## 1.3. Hardware Block Diagram
![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW-014-Outdoor-LoRa-Gateway.png)

# 2. Mechanical Requirement 

## 2.1. Drawing
![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW-014-Outdoor-LoRa-Gateway-Drawing.png)

## 2.2. Interface And Dimension
![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW-014-LoRa-Gateway-Interface.png)

# 3. Specification

## 3.1. Technical Specification
|        Category       |                                                                  Specifications                                                                  |
|:---------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------:|
| CPU                   | Quad-core Cortex A35                                                                                                                             |
| System                | Debian11                                                                                                                                         |
| RAM                   | 2GB                                                                                                                                              |
| eMMC                  | 32GB                                                                                                                                             |
| Network Interface     | •        1 * 10/100 Mbps WAN/LAN variable port •        Supports CAT-5/CAT-5E for data transmission •        Supports POE (voltage range 44-57V) |
| Indicator LEDs (RGB)  | 1). Power 2). Network 3）LTE                                                                                                                     |
| Installation          | Flat, Ceiling                                                                                                                                    |
| Antenna               | 2 * LTE, 1 * GPS, 1 * LoRa, 1 * Wi-Fi 2.4G                                                                                                       |
| Hardware Encryption   | ATECC608B                                                                                                                                        |
| Operating Temperature | -20℃~65℃                                                                                                                                         |
| Storage Temperature   | -40℃~85℃                                                                                                                                         |
| Operating Humidity    | 10%~90%                                                                                                                                          |
| IP Rating             | IP66                                                                                                                                             |

## 3.2. Performance Requirement

<table>
<thead>
  <tr>
    <th colspan="2">Performance Requirement</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Wi-Fi Performance</td>
    <td>●        IEEE Wireless LAN standard: IEEE802.11n, IEEE802.11g, IEEE802.11b<br>●        Data Rate:<br>IEEE 802.11b Standard Mode:1,2,5.5,11Mbps<br>IEEE 802.11g Standard Mode:6,9,12,18,24,36,48,54 Mbps<br>IEEE 802.11n:  MCS0~MCS7 @ HT20/ 2.4GHz band<br>MCS0~MCS7 @ HT40/ 2.4GHz band<br>●        Sensitivity:<br>HT40 MCS7: -70dBm@10% PER(MCS7) /2.4GHz band<br>HT20 MCS7: -71dBm@10% PER(MCS7) /2.4GHz band<br>●        Transmit Power:<br>IEEE 802.11n: 16dBm @HT20/40 MCS7 /2.4GHzband<br>IEEE 802.11g: 16dBm @54MHz<br>IEEE 802.11b: 18dBm@11MHz<br>●        Wireless Security: WPA/WPA2, WEP, TKIP, and AES<br>●        Working mode: Bridge, AP Client<br>●        Range: 50 meters minimum, open field<br>●        Transmit Power:17dBm<br>●        Highest Transmission Rate: 300Mbps<br>●        Frequency offset: +/- 50KHZ<br>●        Frequency Range (MHz): 2412.0~2483.5<br>●        Low Frequency (MHz):2400<br>●        High Frequency (MHz):2483.5<br>●        E.i.r.p (Equivalent Isotopically Radiated power) (mW)&lt;100mW<br>●        Bandwidth (MHz):20MHz/40MHz<br>●        Modulation: BPSK/QPSK, FHSSCCK/DSSS, 64QAM/OFDM</td>
  </tr>
  <tr>
    <td> <br>Bluetooth Performance</td>
    <td>●        TX Power: 19.5dBm<br>●        Range: 150 meters minimum, open filed<br>●        Receiving Sensibility: <a href="mailto:-92dBm@0.1%BER">-92dBm@0.1%BER</a>, 1Mbps<br>●        Frequency offset: +/-20KHZ<br>●        Frequency Range (MHz):2401.0~2483.5<br>●        Low Frequency (MHz):2400<br>●        High Frequency (MHz):2483.5<br>●        E.i.r.p (Equivalent Isotopically Radiated power) (mW)&lt;10mW<br>●        Bandwidth (MHz):2MHz<br>●        Modulation: GFSK</td>
  </tr>
  <tr>
    <td>LoRaWAN</td>
    <td>●        Frequency band support: RU864, IN865, EU868, US915, AU915, KR920, AS923, CN470<br>●        TX power up to 27dBm, RX sensitivity down to -139dBm @SF12, BW125kHz<br>●        Range: 10KM maximum, open field<br>●        Protocol: V1.0 Class A/Class C and V1.0.2 Class A/Class C<br>●        LoRa antenna gain：3/5dBi optional<br>●        LoRa Antenna Type： Omnidirectional<br>●        LoRa working mode： Full/half-duplex (optional)</td>
  </tr>
  <tr>
    <td>LTE Cat 1(North American)</td>
    <td>●        LTE FDD: B2/B4/B5/B12/B13<br>●        WCDM: B2/B4/B5<br>●        LTE FDD Data rate:10(DL)/5(DL)</td>
  </tr>
  <tr>
    <td rowspan="2">LTE Cat M1</td>
    <td>Operation Frequency Band: 850/900/1800/1900MHZ</td>
  </tr>
  <tr>
    <td>●        Global:LTE:FDD:B1/B2/B3/B4/B5/B8/B12/B13/B18/B19/B20/B26/B28<br>●        North America: LTE TDD:B2/B4/B12/B13<br>●        LTE TDD:B39(for cat.M1only)</td>
  </tr>
  <tr>
    <td>Ethernet</td>
    <td>10/100 Mbps</td>
  </tr>
</tbody>
</table>

# 4. Solution
![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW-014-Solution.png)

# 5. Third-Party Platform


## 5.1. The Things Stack (DSGW-014-2-F-TTN)
The Things Stack is an enterprise-grade LoRaWAN network server built on an open-source core. It enables you to create and oversee LoRaWAN networks on your hardware or in the cloud.

![](https://dusunprj.oss-us-west-1.aliyuncs.com/The-Things-Stack.png)

Development reference links for The Things Stack: https://www.thethingsindustries.com/docs/

## 5.2. Chirpstack(DSGW-014-2-F-CS)
The ChirpStack open-source LoRaWAN Network Server stack offers open-source components for LoRaWAN networks that can be used to create a complete solution. This includes a user-friendly web interface for device management and APIs for integration. The modular architecture allows for easy integration into existing infrastructures. All components are licensed under the MIT license and can be used commercially.

![](https://dusunprj.oss-us-west-1.aliyuncs.com/Chirpstack.png)

Development reference links for Chirpstack: https://www.chirpstack.io/

