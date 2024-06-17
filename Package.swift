// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "BinaryNativeClient",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "BinaryNativeClient",
            targets: ["BinaryNativeClientPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "BinaryNativeClientPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/BinaryNativeClientPlugin"),
        .testTarget(
            name: "BinaryNativeClientPluginTests",
            dependencies: ["BinaryNativeClientPlugin"],
            path: "ios/Tests/BinaryNativeClientPluginTests")
    ]
)