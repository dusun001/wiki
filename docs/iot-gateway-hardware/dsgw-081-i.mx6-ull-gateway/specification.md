# **DSGW-081 Industry Edge Computing Gateway**

<div style={{textAlign: 'center'}}>

<button onClick={() => window.print()} style={{ display: 'inline-block', backgroundColor: '#F6940B', color: '#ffffff', padding: '10px 25px',cursor:'pointer', textDecoration: 'none', borderRadius: '4px' }}>Print</button>

</div>

## Model List

**Category A (In Stock, Lead Time: 1~2 Weeks)**

| **Model**  | **Ethernet** | **RS485** | **CAN** | **I/O** | **BLE 5.2** | **Zigbee3.0** | **4G LTE Cat1/M1** | **Wi-Fi2.4G** |
| ---------- | ------------ | --------- | ------- | ------- | ----------- | ------------- | ------------------ | ------------- |
| DSGW-081-5 | ●            | ●         | ●       | ●       | ●           | ●             | ●                  | ●             |

**Category B (Built by Order, Lead Time: 3~4 Weeks)**

| **Model**  | **Ethernet** | **RS485** | **CAN** | **I/O** | **BLE 5.2** | **Z-Wave** | **Zigbee3.0** | **4G LTE Cat1/M1** | **Wi-Fi2.4G** |
| ---------- | ------------ | --------- | ------- | ------- | ----------- | ---------- | ------------- | --------------------- | ------------- |
| DSGW-081-2 | ●            | ●         | ●       | ●       | ●           |            |               |                       | ●             |
| DSGW-081-3 | ●            | ●         | ●       | ●       |             |            | ●             |                       | ●             |

**Category C (Built by Order, Lead Time More Than 8 Weeks, MOQ: 500)**

| **Model**  | **Ethernet** | **RS485** | **CAN** | **I/O** | **BLE 5.2** | **Z-Wave** | **Zigbee3.0** | **4G LTE Cat1/M1** | **Wi-Fi2.4G** | **KNX** |
| ---------- | ------------ | --------- | ------- | ------- | ----------- | ---------- | ------------- | ------------------ | ------------- | ------- |
| DSGW-081-1 | ●            | ●         | ●       | ●       |             |            |               | ●                  | ●             |         |
| DSGW-081-4 | ●            | ●         | ●       | ●       | ●           |            | ●             | ●                  |               |         |
| DSGW-081-6 | ●            | ●         | ●       | ●       | ●           |            | ●             | ●                  | ●             | ●       |
| DSGW-081-7 | ●            | ●         | ●       | ●       | ●           | ●          |               | ●                  | ●             |         |

# 1. Product Introduction

## 1.1. Purpose and Description
The DSGW-081 Industry Edge Computing Gateway, employing the NXP i.MX6ULL, as its processor, provides uninterrupted internet access for end devices over a ubiquitous 4G LTE Cat 1/Cat M1, Wi-Fi 2.4 wireless network, and a wired network.

The DSGW-081 features powerful edge computing capabilities, allowing for data optimization, real-time response, agile connection, and intelligent analysis on the IoT edge. This significantly reduces the data flow between field sites and data centers, avoiding bottlenecks in cloud-end computing.

Moreover, the DSGW-081 is designed to support multiple wireless protocols, such as Bluetooth 5.2 and Zigbee3.0, enabling seamless connectivity and communication among devices. This makes it an ideal solution for various applications, including industrial automation, smart city infrastructure, and remote monitoring.

## 1.2. Product Feature Summary 
- Supports 4G LTE CAT 1/CAT M1
- Rich interfaces including RS485, CAN, I/O, and Ethernet  
- Built-in redundancies: 2 * SIM card slot, link backup, VRRP hot standby, ensuring uninterrupted network communications
- Powerful computing performance, providing high-performance processing resources for edge computing
- Supports a variety of industrial Ethernet protocols and field bus protocols, compatible with a wide range of industrial equipment
- Supports Python development for custom application development
- Supports industrial cloud platforms: Microsoft Azure, Amazon AWS
- Easy for management and large-scale deployment, supports SNMP protocol and Device Manager cloud platform for efficient remote central management
- Fully industrial-grade design, ready for challenging conditions
- Supports multiple wireless protocols: Zigbee 3.0, Bluetooth 5.2, Wi-Fi 2.4

## 1.3. Hardware Block Diagram
![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-081/block.png)

# 2. Mechanical Requirement 

## 2.1. Drawing
![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-081/draw.jpg)

## 2.2. Dimension
![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW%EF%BC%88Spec%EF%BC%89/DSGW-081/dimen.png)

# 3. Specification

## 3.1. Technical Specification
| Item                    |  Parameter                                                                                                    |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CPU                     | ARM NXP i.MX6ULL, Cortex-A7,800Mhz                                                                                                                                                                                                                       |
| System                  | Debian 11                                                                                                                                                                                                                                                |
| RAM                     | 512MB                                                                                                                                                                                                                                                    |
| Storage                 | 8GB eMMC                                                                                                                                                                                                                                                 |
| Power                   | Input: DC 12V/2A                                                                                                                                                                                                                                         |
| Indicator LEDs          | l  Power LED normally on when powered on l  Zigbee/BLE/ LED flash when the signal comes l  Network LED flash When the Gateway can access the Internet l  LTE Signal LED, It indicates the signal strength of LTE                                         |
| Reset                   | Factory reset button. To reset the Gateway to its original factory settings, press and hold it for more than 10 seconds                                                                                                                                  |
| I/O Port                | 4 digital input channels DI State "1": +10~+30V State "0": 0~+3V 2 digital output channels DO Maximum load 5A@30VDC or 250VAC 2 analog input channels AI Current signal: 0-20mA, 4-20mA Voltage signal: 0-5VDC, 0-10VDC Choose one of the above 4 ranges |
| Ethernet                | 1*10/100Mbps WAN/LAN port                                                                                                                                                                                                                                |
| SIM                     | 2 * SIM card slot                                                                                                                                                                                                                                        |
| Antenna                 | 4*SMA：1*LTE, 3*2.4GHZ                                                                                                                                                                                                                                   |
| RS232/RS485             | 1*RS232, 1*RS485                                                                                                                                                                                                                                         |
| CAN                     | Support                                                                                                                                                                                                                                                  |
| Industry Protocol       | Ethernet/IP, Modbus                                                                                                                                                                                                                                      |
| Installation            | DIN-Rail, Flat                                                                                                                                                                                                                                           |
| Protection Rating       | IP30                                                                                                                                                                                                                                                     |
| Housing                 | Aluminum alloy                                                                                                                                                                                                                                           |
| Storage Temperature     | -40℃~85℃                                                                                                                                                                                                                                                 |
| Operating Temperature   | -40℃~70℃                                                                                                                                                                                                                                                 |
| Ambient Humidity        | 5~95%                                                                                                                                                                                                                                                    |
## 3.2. Performance

# 4. QA Requirements
| Information Description | Standard(Yes) Custom(No) |
|:-----------------------:|:------------------------:|
| ESD Testing             | Yes                      |
| RF Antenna Analysis     | Yes                      |
| Environmental Testing   | Yes                      |
| Reliability Testing     | Yes                      |
| Certification           | FCC, CE                  |
