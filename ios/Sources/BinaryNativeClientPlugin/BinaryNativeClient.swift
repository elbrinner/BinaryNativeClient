import Foundation

@objc public class BinaryNativeClient: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
