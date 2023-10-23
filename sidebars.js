/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: "doc",
      id: "getting-started",
      label: "Getting Started",
      className:'bolder',
    },
    // {
    //   type: "doc",
    //   id: "dsgw-210-home-assistant-gateway",
    //   label: "dsgw-210-home-assistant-gateway",
    //   className:'bolder',
    // },
    {
      type: "category",
      label: "IoT Gateway Hardware",
      className:'bolder',
      collapsed: false,
      link: {
        type: "doc",
        id: "iot-gateway-hardware",
      },
      items: [
       // ============Smart IoT Gateway===============
        {
          type: "link",
          href: "/Blank",
          label: "Smart IoT Gateway",
          className: "first",
        },
        {
          type: "category",
          label: "DSGW-290 RK3568 Gateway",
          link: {
            type: "doc",
            id: "iot-gateway-hardware/dsgw-290-rk3568-gateway/overview",
          },
          items: [
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-290-rk3568-gateway/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-290-rk3568-gateway/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-290-rk3568-gateway/quick-start-guide",
              label: "Quick Start Guide",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-290-rk3568-gateway/gui-operating-guide",
            //   label: "GUI Operating Guide",
            // },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-290-rk3568-gateway/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-290-rk3568-gateway/release-note",
            //   label: "Release Note",
            // },
          ],
        },
        {
          type: "category",
          label: "DSGW-210 RK3328 Gateway",
          link: {
            type: "doc",
            id: "iot-gateway-hardware/dsgw-210-rk3328-gateway/overview",
          },
          items: [
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-210-rk3328-gateway/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-210-rk3328-gateway/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-210-rk3328-gateway/quick-start-guide",
              label: "Quick Start Guide",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-210-rk3328-gateway/gui-operating-guide",
            //   label: "GUI Operating Guide",
            // },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-210-rk3328-gateway/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-210-rk3328-gateway/release-note",
            //   label: "Release Note",
            // },
          ],
        },
        {
          type: "category",
          label: "DSGW-230 RK3328 Gateway",
          link: {
            type: "doc",
            id: "iot-gateway-hardware/dsgw-230-rk3328-gateway/overview",
          },
          items: [
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-230-rk3328-gateway/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-230-rk3328-gateway/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-230-rk3328-gateway/quick-start-guide",
              label: "Quick Start Guide",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-230-rk3328-gateway/gui-operating-guide",
            //   label: "GUI Operating Guide",
            // },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-230-rk3328-gateway/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-230-rk3328-gateway/release-note",
            //   label: "Release Note",
            // },
          ],
        },
        {
          type: "category",
          label: "DSGW-120 PX30 Gateway",
          link: {
            type: "doc",
            id: "iot-gateway-hardware/dsgw-120-px30-gateway/overview",
          },
          items: [
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-120-px30-gateway/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-120-px30-gateway/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-120-px30-gateway/quick-start-guide",
              label: "Quick Start Guide",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-120-px30-gateway/gui-operating-guide",
            //   label: "GUI Operating Guide",
            // },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-120-px30-gateway/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-120-px30-gateway/release-note",
            //   label: "Release Note",
            // },
          ],
        },
        {
          type: "category",
          label: "DSGW-030 MTK7688 Gateway",
          link: {
            type: "doc",
            id: "iot-gateway-hardware/dsgw-030-mtk7688-gateway/overview",
          },
          items: [
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-030-mtk7688-gateway/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-030-mtk7688-gateway/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-030-mtk7688-gateway/quick-start-guide",
              label: "Quick Start Guide",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-030-mtk7688-gateway/gui-operating-guide",
            //   label: "GUI Operating Guide",
            // },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-030-mtk7688-gateway/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-030-mtk7688-gateway/release-note",
            //   label: "Release Note",
            // },
          ],
        },
        {
          type: "category",
          label: "DSGW-090 MTK7628 Gateway",
          link: {
            type: "doc",
            id: "iot-gateway-hardware/dsgw-090-mtk7628-gateway/overview",
          },
          items: [
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-090-mtk7628-gateway/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-090-mtk7628-gateway/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-090-mtk7628-gateway/quick-start-guide",
              label: "Quick Start Guide",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-090-mtk7628-gateway/gui-operating-guide",
            //   label: "GUI Operating Guide",
            // },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-090-mtk7628-gateway/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-090-mtk7628-gateway/release-note",
            //   label: "Release Note",
            // },
          ],
        },
        {
          type: "category",
          label: "DSGW-092 ESP32 Gateway",
          link: {
            type: "doc",
            id: "iot-gateway-hardware/dsgw-092-esp32-gateway/overview",
          },
          items: [
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-092-esp32-gateway/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-092-esp32-gateway/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-092-esp32-gateway/quick-start-guide",
              label: "Quick Start Guide",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-092-esp32-gateway/gui-operating-guide",
            //   label: "GUI Operating Guide",
            // },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-092-esp32-gateway/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-092-esp32-gateway/release-note",
            //   label: "Release Note",
            // },
          ],
        },
        {
          type: "category",
          label: "DSGW-201 MT7621A Gateway",
          link: {
            type: "doc",
            id: "iot-gateway-hardware/dsgw-201-mt7621a-gateway/overview",
          },
          items: [
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-201-mt7621a-gateway/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-201-mt7621a-gateway/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-201-mt7621a-gateway/quick-start-guide",
              label: "Quick Start Guide",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-201-mt7621a-gateway/gui-operating-guide",
            //   label: "GUI Operating Guide",
            // },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-201-mt7621a-gateway/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-201-mt7621a-gateway/release-note",
            //   label: "Release Note",
            // },
          ],
        },
        // ============Industrial IoT Gateway===============
        {
          type: "link",
          href: "/Blank",
          label: "Industrial IoT Gateway",
          className: "first",
        },
        {
          type: "category",
          label: "DSGW-081 i.MX6 ULL Gateway",
          link: {
            type: "doc",
            id: "iot-gateway-hardware/dsgw-081-i.mx6-ull-gateway/overview",
          },
          items: [
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-081-i.mx6-ull-gateway/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-081-i.mx6-ull-gateway/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-081-i.mx6-ull-gateway/quick-start-guide",
              label: "Quick Start Guide",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-081-i.mx6-ull-gateway/gui-operating-guide",
            //   label: "GUI Operating Guide",
            // },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-081-i.mx6-ull-gateway/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-081-i.mx6-ull-gateway/release-note",
            //   label: "Release Note",
            // },
          ],
        },
        {
          type: "category",
          label: "DSGW-006 MT7628AN Gateway",
          link: {
            type: "doc",
            id: "iot-gateway-hardware/dwgw-006-mt7628an-getaway/overview",
          },
          items: [
            {
              type: "doc",
              id: "iot-gateway-hardware/dwgw-006-mt7628an-getaway/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dwgw-006-mt7628an-getaway/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dwgw-006-mt7628an-getaway/quick-start-guide",
              label: "Quick Start Guide",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dwgw-006-mt7628an-getaway/gui-operating-guide",
            //   label: "GUI Operating Guide",
            // },
            {
              type: "doc",
              id: "iot-gateway-hardware/dwgw-006-mt7628an-getaway/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dwgw-006-mt7628an-getaway/release-note",
            //   label: "Release Note",
            // },
          ],
        },
        {
          type: "category",
          label: "DSGW-014 PX30K Gateway",
          link: {
            type: "doc",
            id: "iot-gateway-hardware/dsgw-014-px30k-gateway/overview",
          },
          items: [
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-014-px30k-gateway/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-014-px30k-gateway/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-014-px30k-gateway/quick-start-guide",
              label: "Quick Start Guide",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-014-px30k-gateway/gui-operating-guide",
            //   label: "GUI Operating Guide",
            // },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-014-px30k-gateway/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-014-px30k-gateway/release-note",
            //   label: "Release Note",
            // },
          ],
        },
        {
          type: "category",
          label: "DSGW-380 RK3588 Gateway",
          link: {
            type: "doc",
            id: "iot-gateway-hardware/dsgw-380-rk3588-gateway/overview",
          },
          items: [
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-380-rk3588-gateway/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-380-rk3588-gateway/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-380-rk3588-gateway/quick-start-guide",
              label: "Quick Start Guide",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-380-rk3588-gateway/gui-operating-guide",
            //   label: "GUI Operating Guide",
            // },
            {
              type: "doc",
              id: "iot-gateway-hardware/dsgw-380-rk3588-gateway/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "iot-gateway-hardware/dsgw-380-rk3588-gateway/release-note",
            //   label: "Release Note",
            // },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "IoT Gateway with Applications",
      className:'bolder',
      link: {
        type: "doc",
        id: "iot-gateway-with-applications",
      },
      items: [
        {
          type: "category",
          label: "DSGW-210 RK3328 Home Assistant Gateway",
          link: {
            type: "doc",
            id: "iot_gateway_with_applications/dsgw-210-rk3328-home-assistant-gateway/overview",
            // id: "dsgw-210-home-assistant-gateway"
          },
          items: [
            {
              type: "doc",
              id: "iot_gateway_with_applications/dsgw-210-rk3328-home-assistant-gateway/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "iot_gateway_with_applications/dsgw-210-rk3328-home-assistant-gateway/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "iot_gateway_with_applications/dsgw-210-rk3328-home-assistant-gateway/quick-start-guide",
              label: "Quick Start Guide",
            },
            {
              type: "doc",
              id: "iot_gateway_with_applications/dsgw-210-rk3328-home-assistant-gateway/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "iot_gateway_with_applications/dsgw-210-rk3328-home-assistant-gateway/release-note",
            //   label: "Release Note",
            // },
          ],
        },
        {
          type: "category",
          label: "DSGW-211 PX30 Enocean OpenHAB Gateway",
          link: {
            type: "doc",
            id: "iot_gateway_with_applications/dsgw-211-px30-enocean-openhab-gateway/overview",
          },
          items: [
            {
              type: "doc",
              id: "iot_gateway_with_applications/dsgw-211-px30-enocean-openhab-gateway/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "iot_gateway_with_applications/dsgw-211-px30-enocean-openhab-gateway/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "iot_gateway_with_applications/dsgw-211-px30-enocean-openhab-gateway/quick-start-guide",
              label: "Quick Start Guide",
            },
            {
              type: "doc",
              id: "iot_gateway_with_applications/dsgw-211-px30-enocean-openhab-gateway/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "iot_gateway_with_applications/dsgw-211-px30-enocean-openhab-gateway/release-note",
            //   label: "Release Note",
            // },
          ],
        },
        {
          type: "category",
          label: "DSGW-040 MT7620 Router Gateway",
          link: {
            type: "doc",
            id: "iot_gateway_with_applications/dsgw-040-mt7620-router-gateway/overview",
          },
          items: [
            {
              type: "doc",
              id: "iot_gateway_with_applications/dsgw-040-mt7620-router-gateway/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "iot_gateway_with_applications/dsgw-040-mt7620-router-gateway/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "iot_gateway_with_applications/dsgw-040-mt7620-router-gateway/quick-start-guide",
              label: "Quick Start Guide",
            },
            {
              type: "doc",
              id: "iot_gateway_with_applications/dsgw-040-mt7620-router-gateway/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "iot_gateway_with_applications/dsgw-040-mt7620-router-gateway/release-note",
            //   label: "Release Note",
            // },
          ],
        },
        {
          type: "category",
          label: "DSGW-021 MT7628AN Router Gateway",
          link: {
            type: "doc",
            id: "iot_gateway_with_applications/dsgw-021-mt7628an-router-gateway/overview",
          },
          items: [
            {
              type: "doc",
              id: "iot_gateway_with_applications/dsgw-021-mt7628an-router-gateway/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "iot_gateway_with_applications/dsgw-021-mt7628an-router-gateway/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "iot_gateway_with_applications/dsgw-021-mt7628an-router-gateway/quick-start-guide",
              label: "Quick Start Guide",
            },
            {
              type: "doc",
              id: "iot_gateway_with_applications/dsgw-021-mt7628an-router-gateway/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "iot_gateway_with_applications/dsgw-021-mt7628an-router-gateway/release-note",
            //   label: "Release Note",
            // },
          ],
        },
      ]
    },
    {
      type: "category",
      label: "System on Modules",
      className:'bolder',
      link: {
        type: "doc",
        id: "system-on-modules",
      },
      items: [
        {
          type: "category",
          label: "PX30 SoM",
          link: {
            type: "doc",
            id: "system_on_modules/px30-som/overview",
          },
          items: [
            {
              type: "doc",
              id: "system_on_modules/px30-som/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "system_on_modules/px30-som/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "system_on_modules/px30-som/quick-start-guide",
              label: "Quick Start Guide",
            },
            // {
            //   type: "doc",
            //   id: "system_on_modules/px30-som/hardware-development-guide",
            //   label: "Hardware Development Guide",
            // },
            // {
            //   type: "doc",
            //   id: "system_on_modules/px30-som/chip-guidance",
            //   label: "Chip Guidance",
            // },
            // {
            //   type: "doc",
            //   id: "system_on_modules/px30-som/deployment-guide",
            //   label: "Deployment Guide",
            // },
            {
              type: "doc",
              id: "system_on_modules/px30-som/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "system_on_modules/px30-som/release-note",
            //   label: "Release Note",
            // },
          ]
        },
        {
          type: "category",
          label: "RK3328 SoM",
          link: {
            type: "doc",
            id: "system_on_modules/rk3328-som/overview",
          },
          items: [
            {
              type: "doc",
              id: "system_on_modules/rk3328-som/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "system_on_modules/rk3328-som/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "system_on_modules/rk3328-som/quick-start-guide",
              label: "Quick Start Guide",
            },
            // {
            //   type: "doc",
            //   id: "system_on_modules/rk3328-som/hardware-development-guide",
            //   label: "Hardware Development Guide",
            // },
            // {
            //   type: "doc",
            //   id: "system_on_modules/rk3328-som/chip-guidance",
            //   label: "Chip Guidance",
            // },
            // {
            //   type: "doc",
            //   id: "system_on_modules/rk3328-som/deployment-guide",
            //   label: "Deployment Guide",
            // },
            {
              type: "doc",
              id: "system_on_modules/rk3328-som/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "system_on_modules/rk3328-som/release-note",
            //   label: "Release Note",
            // },
          ]
        },
        {
          type: "category",
          label: "RK3308 SoM",
          link: {
            type: "doc",
            id: "system_on_modules/rk3308-som/overview",
          },
          items: [
            {
              type: "doc",
              id: "system_on_modules/rk3308-som/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "system_on_modules/rk3308-som/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "system_on_modules/rk3308-som/quick-start-guide",
              label: "Quick Start Guide",
            },
            // {
            //   type: "doc",
            //   id: "system_on_modules/rk3308-som/hardware-development-guide",
            //   label: "Hardware Development Guide",
            // },
            // {
            //   type: "doc",
            //   id: "system_on_modules/rk3308-som/chip-guidance",
            //   label: "Chip Guidance",
            // },
            // {
            //   type: "doc",
            //   id: "system_on_modules/rk3308-som/deployment-guide",
            //   label: "Deployment Guide",
            // },
            {
              type: "doc",
              id: "system_on_modules/rk3308-som/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "system_on_modules/rk3308-som/release-note",
            //   label: "Release Note",
            // },
          ]
        },
        {
          type: "category",
          label: "MT7621 SoM",
          link: {
            type: "doc",
            id: "system_on_modules/mt7621-som/overview",
          },
          items: [
            {
              type: "doc",
              id: "system_on_modules/mt7621-som/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "system_on_modules/mt7621-som/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "system_on_modules/mt7621-som/quick-start-guide",
              label: "Quick Start Guide",
            },
            // {
            //   type: "doc",
            //   id: "system_on_modules/mt7621-som/hardware-development-guide",
            //   label: "Hardware Development Guide",
            // },
            // {
            //   type: "doc",
            //   id: "system_on_modules/mt7621-som/chip-guidance",
            //   label: "Chip Guidance",
            // },
            // {
            //   type: "doc",
            //   id: "system_on_modules/mt7621-som/deployment-guide",
            //   label: "Deployment Guide",
            // },
            {
              type: "doc",
              id: "system_on_modules/mt7621-som/faqs",
              label: "FAQS",
            },
            // {
            //   type: "doc",
            //   id: "system_on_modules/mt7621-som/release-note",
            //   label: "Release Note",
            // },
          ]
        },
        {
          type: "category",
          label: "MT7628 SoM",
          link: {
            type: "doc",
            id: "system_on_modules/mt7628-som/overview",
          },
          items: [
            {
              type: "doc",
              id: "system_on_modules/mt7628-som/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "system_on_modules/mt7628-som/user-manual",
              label: "User Manual",
            },
            {
              type: "doc",
              id: "system_on_modules/mt7628-som/quick-start-guide",
              label: "Quick Start Guide",
            },
            {
              type: "doc",
              id: "system_on_modules/mt7628-som/hardware-development-guide",
              label: "Hardware Development Guide",
            },
            {
              type: "doc",
              id: "system_on_modules/mt7628-som/chip-guidance",
              label: "Chip Guidance",
            },
            {
              type: "doc",
              id: "system_on_modules/mt7628-som/deployment-guide",
              label: "Deployment Guide",
            },
            {
              type: "doc",
              id: "system_on_modules/mt7628-som/faqs",
              label: "FAQS",
            },
            {
              type: "doc",
              id: "system_on_modules/mt7628-som/release-note",
              label: "Release Note",
            },
          ]
        },
      ]
    }
  ],
};

module.exports = sidebars;
