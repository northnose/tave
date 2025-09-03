# tave
Unofficial code and tools related to Tave CRM.

## vsco-tave

This userstyle attempts to revert most of the [workspace.vsco.co](https://workspace.vsco.co/) style changes (mostly colors + fonts) back to how it was on tave.app. There are bugs (some elements are not styled correctly) but because this is purely a CSS override, it's unlikely to cause functional bugs or do anything dangerous.

It is subject to further breakage at any time as Tave/VSCO make changes to the app.

Here is a screenshot from August 7, 2025:

![screenshot of vsco-tave](https://userstyles.world/preview/23582/1.webp)

### Installation

1. Install the [Stylus](https://github.com/openstyles/stylus) extension for your browser.
2. Install this style from https://userstyles.world/style/23582/vsco-tave. 

## tampermonkey

Currently there's just one script here. It adds a "Purge" button to the job/lead page if and only if it is in the "lead" (i.e. not booked, fulfillment, or completed) stage. This is to reduce the amount of clicking required to purge spam leads.

### Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) extension for your browser.
2. Copy/paste the script into Tampermonkey.
