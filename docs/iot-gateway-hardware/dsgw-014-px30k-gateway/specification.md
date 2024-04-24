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
![](https://dusunprj.oss-us-west-1.aliyuncs.com/oss://dusunprj/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-014/%E5%9B%BE%E7%89%87%201.png)

# 2. Mechanical Requirement 

## 2.1. Drawing
https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-014/%E5%9B%BE%E7%89%87%201.png

## 2.2. Interface And Dimension
![](https://dusunprj.oss-us-west-1.aliyuncs.com/202403061906171.png)

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

