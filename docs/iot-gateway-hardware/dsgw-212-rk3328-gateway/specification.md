# DSGW-212 IoT Edge Computing Gateway Product Specification

## Model List

| **Feature Model** | **Wi-Fi**  <br />**2.4G/5G** | **BLE 5.2** | **Zigbee 3.0** | **Thread** | **LoRaWAN** | **LTE** <br /> **CatM1** | **LTE Cat1** | **LTE**  <br />**Cat4** | **Li-**  <br />**Battery** | **Matter** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DSGW-212-X-1 | ● | ● | ● | ● |  |  | ● |  |  | ● |
| DSGW-212-X-2 | ● | ● | ● | ● |  | ● |  |  |  | ● |
| DSGW-212-X-3 | ● | ● | ● | ● |  |  |  | ● |  | ● |
| DSGW-212-X-4 | ● | ● | ● | ● |  |  | ● |  | ● | ● |
| DSGW-212-X-5 | ● | ● |  | ● |  |  |  |  |  | ● |
| DSGW-212-X-6 | ● | ● |  | ● | ● |  |  |  | ● | ● |
| DSGW-212-X-7 | ● | ● |  | ● | ● |  | ● |  | ● | ● |
| DSGW-212-X-8 | ● | ● | ● | ● | ● |  | ● |  | ● | ● |

| **Configuration** | **RAM** | **eMMC** |
| --- | --- | --- |
| \-A | 1GB | 8GB |
| \-B | 2GB | 8GB |
| \-D | 2GB | 16GB |
| \-F | 2GB | 32GB |

**NOTE:** <br />
**The Explanation on the product model:** <br /> **DSGW-212-X-N**
- X : Hardware Configuration Information ( including RAM eMMC)
- N : Wireless Protocol Combination

## 1. Product Description

### 1.1. Purpose and Description

The DSGW-212 is an IoT gateway featuring multiple protocols, Matter support, and edge computing capabilities. It ensures reliable connectivity for a broad array of wireless IoT devices and enables seamless interoperability across Matter-compatible smart home and IoT ecosystems. Its modular architecture allows the gateway to customize various features,delivering an off-the-shelf solution tailored to specific requirements. Available options include LTE, Bluetooth 5.2, Wi-Fi 2.4/5G, Ethernet, USB 2.0, Zigbee, Thread, Matter, and Li-ion battery backup.<br />
The DSGW-212 IoT gateway offers versatile connectivity options, Matter-enabled interoperability, and edge computing capabilities, making it suitable for various applications across multiple fields. Key areas include smart homes, industrial IoT, agriculture, energy management, transportation, healthcare, smart cities, and retail. This flexibility allows the DSGW-212 to manage and integrate IoT devices, bridge different protocols, optimize  processes, monitor equipment, and improve efficiency across various scenarios, providing a comprehensive solution for diverse IoT applications.<br />

### 1.2. Product Feature Summary

- Support 5V USB type-c power supply
- Support IEEE802.11ac, IEEE802.11n, IEEE802.11g, IEEE 802.11b Protocol
- Support 4G LTE CATM1, CAT1, CAT4
- Support Bluetooth 5.2, Zigbee3.0, Thread, Wi-Fi 2.4/5G
- One WAN/LAN variable network port
- One USB2.0 port
- Backup Li-battery

### 1.3. Hardware Block Diagram

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-212/1.png)

## 2. Mechanical Requirement

### 2.1. Drawings

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-212/2.png)

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-212/3.png)

### 2.2. Interface and Dimension

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-212/4.png)

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-212/5.png)

## 3. Specification

### 3.1. Technical Specification

| **Category** | **Specifications** |
| --- | --- |
| CPU | RK3328 Quad-core Cortex A53 |
| System | Debian 11,Ubuntu 20.04, Android11,Yocto4.0 |
| RAM | Up to 2GB |
| eMMC | Up to 32GB |
| TF Card | Up to 128GB |
| Power Supply | USB Type-C 5V/3A |
| Reset | Power reboot button |
| Power | Software defined button(Factory reset) |
| Network Interface | 1 \* WAN/LAN variable |
| USB | 1 \* USB2.0 |
| SIM | 1 \* Micro SIM card slot |
| TF | 1 \* TF slot |
| Indicator LEDs(RGB) | 1)Power & battery LED<br /> 2)Wireless LED<br /> 3)LTE indicator |
| Antenna | Zigbee/BLE PCB Antenna, Thread/Wi-Fi FPC Antenna |
| Li Battery | 5000 mAh |
| Installation method | Flat, Ceiling, Wall Mounting |
| RTC | Real-Time Clock operated from an onboard battery |
| Hardware encryption | ECC608B |
| Operating Temperature | \-10℃~55℃ |
| Storage Temperature | \-20℃~65℃ |
| Operating humidity | 10%~90% |
| IP rating | IP22 |

<table><tbody><tr>
  <td colspan="2"><p><strong>Performance Requirement</strong></p></td></tr><tr><td><p>Wi-Fi Performance</p></td><td><p>● IEEE Wireless LAN standard: IEEE802.11ac, IEEE802.11n, IEEE802.11g, IEEE802.11b</p><p>● Data Rate:</p><p>IEEE 802.11b Standard Mode:1,2,5.5,11Mbps</p><p>IEEE 802.11g Standard Mode:6,9,12,18,24,36,48,54 Mbps</p><p>IEEE 802.11n: MCS0~MCS7 @ HT20/ 2.4GHz band MCS0~MCS7 @ HT40/ 2.4GHz band</p><p>MCS0~MCS9 @ HT40/ 5GHz band</p><p>IEEE 802.11ac: MCS0~MCS9 @ VHT80/ 5GHz band</p><p>● Sensitivity:</p><p>VHT80 MCS9: -60dBm@10% PER(MCS9) /5GHz band</p><p>HT40 MCS9: -63dBm@10% PER(MCS9) /5GHz band</p><p>HT40 MCS7: -70dBm@10% PER(MCS7) /2.4GHz band</p><p>HT20 MCS7 : -71dBm@10% PER(MCS7) /2.4GHz band</p><p>● Transmit Power:</p><p>IEEE 802.11ac: 13dBm @HT80 MCS9 /5GHz band</p><p>IEEE 802.11ac: 16dBm @HT80 MCS0 /5GHz band</p><p>IEEE 802.11n: 14dBm @HT20/40 MCS7 /5GHz band</p><p>IEEE 802.11n: 16dBm @HT20/40 MCS0 /5GHz band</p><p>IEEE 802.11n: 16dBm @HT20/40 MCS7 /2.4GHzband</p><p>IEEE 802.11g: 16dBm @54MHz</p><p>IEEE 802.11b: 18dBm @11MHz</p><p>● Wireless Security: WPA/WPA2, WEP, TKIP, and AES</p><p>● Working mode: Bridge, AP Client</p><p>● Range: 50 meters maximum, open field</p><p>● Transmit Power:17dBm</p><p>● Highest Transmission Rate: 300Mbps</p><p>● Frequency offset: +/- 50KHZ</p><p>● Frequency Range (MHz): 2412.0~2483.5</p><p>● Low Frequency (MHz):2400</p><p>● High Frequency (MHz):2483.5</p><p>● E.i.r.p (Equivalent Isotopically Radiated power) (mW)&lt;100mW</p><p>● Bandwidth (MHz):20MHz/40MHz</p><p>● Modulation: BPSK/QPSK, FHSSCCK/DSSS, 64QAM/OFDM</p>
</td></tr>
<tr><td>
<p>Bluetooth Performance</p></td><td><p>● TX Power: 19.5dBm</p><p>● Range: 150 meters maximum, open filed</p><p>● Receiving Sensibility: -92dBm@0.1%BER 1Mbps</p><p>● Frequency offset: +/-20KHZ</p><p>● Frequency Range (MHz):2401.0~2483.5</p><p>● Low Frequency (MHz):2400</p><p>● High Frequency (MHz):2483.5</p><p>● E.i.r.p (Equivalent Isotopically Radiated power) (mW)&lt;10mW</p><p>● Bandwidth (MHz):2MHz</p><p>● Modulation: GFSK</p></td></tr><tr><td><p>Thread Performance</p></td><td><p>● TX Power: +20 dBm (Maximum, programmable down to -20 dBm)</p><p>● Range: 300 to 500 meters maximum, open field (Depending on antenna and environment)</p><p>● Receiving Sensibility: -104.3 dBm (@ 250 kbps O-QPSK)</p><p>● Frequency Offset: +/- 40 kHz (Maximum tolerance over temperature/voltage)</p><p>● Frequency Range (MHz): 2400.0 ~ 2483.5</p><p>● Low Frequency (MHz): 2405 (First Thread Channel 11)</p><p>● High Frequency (MHz): 2480 (Last Thread Channel 2)</p><p>● E.i.r.p (Equivalent Isotopically Radiated Power) (mW): &lt; 100 mW (+20 dBm chip setting requires attenuation or specific antenna gain limits to meet regulatory standards like</p><p>CE/SRRC)</p><p>● Bandwidth (MHz): 5 MHz (Channel spacing) / 2 MHz (Signal occupied bandwidth)</p><p>● Modulation: O-QPSK</p>
</td></tr>
  <tr><td><p>Zigbee Performance</p></td><td><p>● TX Power: 17.5dBm</p><p>● Range: 100 meters maximum, open filed</p><p>● Receiving Sensibility: -94dBm</p><p>● Frequency offset: +/-20KHZ</p><p>● Frequency Range (MHz):2400.0~2483.5</p><p>● Low Frequency (MHz):2400</p><p>● High Frequency (MHz):2483.5</p><p>● E.i.r.p (Equivalent Isotopically Radiated power) (mW)&lt;100mW</p><p>● Bandwidth (MHz):5MHz</p><p>● Modulation: OQPSK</p></td></tr><tr><td><p>LTE Cat M1</p></td><td><p>Operation Frequency Band: 850/900/1800/1900MHZ</p><p>● Global:LTE:FDD:B1/B2/B3/B4/B5/B8/B12/B13/B18/B19/B20 /B26/B28</p><p>● North America: LTETDD:B2/B4/B12/B13</p><p>● LTE TDD:B39(for cat.M1only)</p></td></tr><tr><td><p>LTE Cat4</p></td><td><p>● LTE-FDD:</p><p>B1/B2/B3/B4/B5/B7/B8/B12/B13/B18/B19/B20/B25/B26/B2 8</p><p>● LTE-TDD: B38/B39/B40/B41</p><p>● WCDMA: B1/B2/B4/B5/B6/B8/B19</p><p>● GSM: B2/B3/B5/B8</p></td></tr><tr><td><p>LTE Cat1</p></td><td><p>● LTE FDD: B2/B4/B5/B12/B13</p><p>● WCDMA:B2/B4/B5</p><p>● LTE FDD Data rate:10(DL)/5(DL)</p></td></tr><tr><td><p>WAN/LAN</p></td><td><p>10/100M bps</p></td></tr></tbody></table>

## 4. QA Requirement

| **Information Description** | **Standard(Yes) Custom(No)** |
| --- | --- |
| ESD Testing | Yes |
| RF Antenna Analysis | Yes |
| Environmental Testing | Yes |
| Reliability Testing | Yes |
| Certification | FCC, CE, RoHS, RCM, IC, CB |


