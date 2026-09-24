# DSGW-096 ESP32 Smart Gateway

## Model List

| Feature Mode | Wi-Fi 2.4G | Bluetoth5.2 | Zigbee3.0 |
| --- | --- | --- | --- |
| DSGW-096-1 | ● | ● |  |
| DSGW-096-2 | ● |  | ● |
| DSGW-096-3 | ● | ● | ● |
| DSGW-096-4 | ● |  |  |

## 1. Product Description

### 1.1. Purpose and Description

DSGW-096, based on ESP32, is designed for smart home systems, the intelligent security industry, and pension service applications. It supports multiple protocols, including Bluetooth 5.2(OR Zigbee 3.0), and Wi-Fi 2.4G, making it an ideal choice for IoT applications requiring the integration of a wide variety of devices and sensors. For example, it can collect data from various end devices (such as Bluetooth smart locks, Zigbee sensors, or medical sensors).

### 1.2. Product Feature Summary

- Processor: ESP32
- OS: FreeRTOS
- USB 5V/2A type-C power supply
- Supports IEEE802.11n, IEEE802.11g, IEEE 802.11b protocol
- Supports Wi-Fi2.4, Zigbee 3.0, OR Bluetooth 5.2
- One WAN/LAN 100Mbps variable network port

### 1.3. Hardware Block Diagram

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-096/1.png)

## 2. Mechanical Requirement

### 2.1. Drawings

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-096/2.png)

## 3. Specification

### 3.1. Technical Specification

| **Category** | **Specifications** |
| --- | --- |
| CPU | ESP32 |
| System | FreeRTOS |
| RAM | 2 MB |
| Flash | 16MB |
| Power Supply | USB Type-C 5V/2A |
| Indicator LEDs | Green LED: Power LED normally on when powered on  <br />Red LED: BLE/Zigbee LED flash when the signal comes <br />Blue LED: Wi-Fi LED normally on after connecting to network for 1-2 sec |
| Antenna | Zigbee or Bluetooth Antenna |
| Ethernet | 1 \* 10/100Mbps WAN/LAN variable |
| Reset | Factory reset button. To reset the Gateway to its original factory settings, press and hold it for more than 10 seconds |
| Wireless protocol | Wi-Fi 2.4G, Zigbee3.0 OR Bluetooth 5.2 |
| Installation method | Flat, Ceiling |
| Operating Temperature | \-10℃~55℃ |
| Storage Temperature | \-20℃~65℃ |
| Operating humidity | 10%~90% |
| IP rating | IP22 |

<table><tbody><tr><td colspan="2"><p><strong>Performance Requirement</strong></p></td>
</tr><tr><td><p>Wi-Fi Performance</p></td><td>
  <p>- IEEE Wireless LAN standard: IEEE802.11n, IEEE802.11g, IEEE802.11b</p>
  <p>- Data Rate:</p><p>IEEE 802.11b Standard Mode:1,2,5.5,11Mbps</p>
  <p>IEEE 802.11g Standard Mode:6,9,12,18,24,36,48,54 Mbps</p>
  <p>IEEE 802.11n: MCS0~MCS7 @ HT20/ 2.4GHz band MCS0~MCS7 @ HT40/ 2.4GHz band</p>
  <p>- Sensitivity:</p>
  <p>HT40 MCS7: -70dBm@10% PER(MCS7) /2.4GHz band</p>
  <p>HT20 MCS7 :-71dBm@10% PER(MCS7) /2.4GHz band</p>
  <p>- Transmit Power:</p>
  <p>IEEE 802.11n: 16dBm @HT20/40 MCS7 /2.4GHzband</p>
  <p>IEEE 802.11g: 16dBm @54MHz</p>
  <p>IEEE 802.11b: 18dBm@11MHz</p>
  <p>- Wireless Security: WPA/WPA2, WEP, TKIP, and AES</p>
  <p>- Working mode: Bridge, AP Client</p>
  <p>- Range: 50 meters maximum, open field</p>
  <p>- Transmit Power:17dBm</p>
  <p>- Highest Transmission Rate: 300Mbps</p>
  <p>- Frequency offset: +/- 50KHZ</p>
  <p>- Frequency Range (MHz): 2412.0~2483.5</p>
  <p>- Low Frequency (MHz):2400</p>
  <p>- High Frequency (MHz):2483.5</p>
  <p>- E.i.r.p (Equivalent Isotopically Radiated power) (mW)&lt;100mW</p>
  <p>- Bandwidth (MHz):20MHz/40MHz</p>
  <p>- Modulation: BPSK/QPSK, FHSSCCK/DSSS, 64QAM/OFDM</p>
</td></tr><tr><td><p>Bluetooth Performance</p></td><td>
  <p>- TX Power: 19.5dBm</p>
  <p>- Range: 150 meters maximum, open filed</p>
  <p>- Receiving Sensibility: -92dBm@0.1%BER, 1Mbps</p>
  <p>- Frequency offset: +/-20KHZ</p>
  <p>- Frequency Range (MHz):2401.0~2483.5</p>
  <p>- Low Frequency (MHz):2400</p>
  <p>- High Frequency (MHz):2483.5</p>
  <p>- E.i.r.p (Equivalent Isotopically Radiated power) (mW)&lt;10mW</p>
  <p>- Bandwidth (MHz):2MHz</p>
  <p>- Modulation: GFSK</p></td></tr><tr><td>
  <p>Zigbee Performance</p></td><td>
  <p>- TX Power: 17.5dBm</p>
  <p>- Range: 100 meters maximum, open filed</p>
  <p>- Receiving Sensibility: -94dBm</p>
  <p>- Frequency offset: +/-20KHZ</p>
  <p>- Frequency Range (MHz):2400.0~2483.5</p>
  <p>- Low Frequency (MHz):2400</p>
  <p>- High Frequency (MHz):2483.5</p>
  <p>- E.i.r.p (Equivalent Isotopically Radiated power) (mW)&lt;100mW</p>
  <p>- Bandwidth (MHz):5MHz</p>
  <p>- Modulation: OQPSK</p>
</td></tr><tr><td><p>Ethernet</p></td><td><p>10/100 Mbps</p>
</td></tr>
</tbody></table>

## 4. QA Requirements

| **Information Description** | **Standard (Yes) custom(No)** |
| --- | --- |
| ESD Testing | YES |
| RF Antenna Analysis | YES |
| Environmental Testing | YES |
| Reliability Testing | YES |
| Certification | FCC, CE, RoHS |
