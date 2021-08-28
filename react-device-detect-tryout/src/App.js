import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';

import BrowserNameTryout from 'src/components/BrowserNameTryout';
import BrowserTypesTryout from 'src/components/BrowserTypesTryout';
import BrowserVersionTryout from 'src/components/BrowserVersionTryout';
import DeviceDetectTryout from 'src/components/DeviceDetectTryout';
import DeviceTypeTryout from 'src/components/DeviceTypeTryout';
import EngineNameTryout from 'src/components/EngineNameTryout';
import EngineVersionTryout from 'src/components/EngineVersionTryout';
import FullBrowserVersionTryout from 'src/components/FullBrowserVersionTryout';
import GetUATryout from 'src/components/GetUATryout';
import IsAndroidTryout from 'src/components/IsAndroidTryout';
import IsBrowserTryout from 'src/components/IsBrowserTryout';
import IsChromeTryout from 'src/components/IsChromeTryout';
import IsChromiumTryout from 'src/components/IsChromiumTryout';
import IsConsoleTryout from 'src/components/IsConsoleTryout';
import IsDesktopTryout from 'src/components/IsDesktopTryout';
import IsEdgeChromiumTryout from 'src/components/IsEdgeChromiumTryout';
import IsEdgeTryout from 'src/components/IsEdgeTryout';
import IsElectronTryout from 'src/components/IsElectronTryout';
import IsFirefoxTryout from 'src/components/IsFirefoxTryout';
import IsIETryout from 'src/components/IsIETryout';
import IsIOS13Tryout from 'src/components/IsIOS13Tryout';
import IsIOSTryout from 'src/components/IsIOSTryout';
import IsIPad13Tryout from 'src/components/IsIPad13Tryout';
import IsIPhone13Tryout from 'src/components/IsIPhone13Tryout';
import IsIPod13Tryout from 'src/components/IsIPod13Tryout';
import IsLegacyEdgeTryout from 'src/components/IsLegacyEdgeTryout';
import IsMacOsTryout from 'src/components/IsMacOsTryout';
import IsMobileOnlyTryout from 'src/components/IsMobileOnlyTryout';
import IsMobileSafariTryout from 'src/components/IsMobileSafariTryout';
import IsMobileTryout from 'src/components/IsMobileTryout';
import IsOperaTryout from 'src/components/IsOperaTryout';
import IsSafariTryout from 'src/components/IsSafariTryout';
import IsSamsungBrowserTryout from 'src/components/IsSamsungBrowserTryout';
import IsSmartTVTryout from 'src/components/IsSmartTVTryout';
import IsTabletTryout from 'src/components/IsTabletTryout';
import IsWearableTryout from 'src/components/IsWearableTryout';
import IsWindowsTryout from 'src/components/IsWindowsTryout';
import IsWinPhoneTryout from 'src/components/IsWinPhoneTryout';
import IsYandexTryout from 'src/components/IsYandexTryout';
import MobileModelTryout from 'src/components/MobileModelTryout';
import MobileVendorTryout from 'src/components/MobileVendorTryout';
import OsNameTryout from 'src/components/OsNameTryout';
import OsTypesTryout from 'src/components/OsTypesTryout';
import OsVersionTryout from 'src/components/OsVersionTryout';

function App() {
  return (
    <div className="App">
      <BrowserView>
        <h1> This is rendered only in browser </h1>
      </BrowserView>
      <MobileView>
        <h1> This is rendered only on mobile </h1>
      </MobileView>
      <BrowserNameTryout />
      <BrowserTypesTryout />
      <BrowserVersionTryout />
      <DeviceDetectTryout />
      <DeviceTypeTryout />
      <EngineNameTryout />
      <EngineVersionTryout />
      <FullBrowserVersionTryout />
      <GetUATryout />
      <IsAndroidTryout />
      <IsBrowserTryout />
      <IsChromeTryout />
      <IsChromiumTryout />
      <IsConsoleTryout />
      <IsDesktopTryout />
      <IsEdgeChromiumTryout />
      <IsEdgeTryout />
      <IsElectronTryout />
      <IsFirefoxTryout />
      <IsIETryout />
      <IsIOS13Tryout />
      <IsIOSTryout />
      <IsIPad13Tryout />
      <IsIPhone13Tryout />
      <IsIPod13Tryout />
      <IsLegacyEdgeTryout />
      <IsMacOsTryout />
      <IsMobileOnlyTryout />
      <IsMobileSafariTryout />
      <IsMobileTryout />
      <IsOperaTryout />
      <IsSafariTryout />
      <IsSamsungBrowserTryout />
      <IsSmartTVTryout />
      <IsTabletTryout />
      <IsWearableTryout />
      <IsWindowsTryout />
      <IsWinPhoneTryout />
      <IsYandexTryout />
      <MobileModelTryout />
      <MobileVendorTryout />
      <OsNameTryout />
      <OsTypesTryout />
      <OsVersionTryout />
    </div>
  );
}

export default App;

// import IsAndroidTryout from 'src/components/IsAndroidTryout';
// import IsBrowserTryout from 'src/components/IsBrowserTryout';
// import IsChromeTryout from 'src/components/IsChromeTryout';
// import IsChromiumTryout from 'src/components/IsChromiumTryout';
// import IsConsoleTryout from 'src/components/IsConsoleTryout';
// import IsDesktopTryout from 'src/components/IsDesktopTryout';
// import IsEdgeTryout from 'src/components/IsEdgeTryout';
// import IsEdgeChromiumTryout from 'src/components/IsEdgeChromiumTryout';
// import IsElectronTryout from 'src/components/IsElectronTryout';
// import IsFirefoxTryout from 'src/components/IsFirefoxTryout';
// import IsIETryout from 'src/components/IsIETryout';
// import IsIOSTryout from 'src/components/IsIOSTryout';
// import IsIOS13Tryout from 'src/components/IsIOS13Tryout';
// import IsIPad13Tryout from 'src/components/IsIPad13Tryout';
// import IsIPhone13Tryout from 'src/components/IsIPhone13Tryout';
// import IsIPod13Tryout from 'src/components/IsIPod13Tryout';
// import IsLegacyEdgeTryout from 'src/components/IsLegacyEdgeTryout';
// import IsMacOsTryout from 'src/components/IsMacOsTryout';
// import IsMobileTryout from 'src/components/IsMobileTryout';
// import IsMobileOnlyTryout from 'src/components/IsMobileOnlyTryout';
// import IsMobileSafariTryout from 'src/components/IsMobileSafariTryout';
// import IsOperaTryout from 'src/components/IsOperaTryout';
// import IsSafariTryout from 'src/components/IsSafariTryout';
// import IsSamsungBrowserTryout from 'src/components/IsSamsungBrowserTryout';
// import IsSmartTVTryout from 'src/components/IsSmartTVTryout';
// import IsTabletTryout from 'src/components/IsTabletTryout';
// import IsWearableTryout from 'src/components/IsWearableTryout';
// import IsWindowsTryout from 'src/components/IsWindowsTryout';
// import IsWinPhoneTryout from 'src/components/IsWinPhoneTryout';
// import IsYandexTryout from 'src/components/IsYandexTryout';
// import MobileModelTryout from 'src/components/MobileModelTryout';
// import MobileVendorTryout from 'src/components/MobileVendorTryout';
// import OsNameTryout from 'src/components/OsNameTryout';
// import OsTypesTryout from 'src/components/OsTypesTryout';
// import OsVersionTryout from 'src/components/OsVersionTryout';
