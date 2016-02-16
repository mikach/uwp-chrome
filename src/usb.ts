type Direction = 'in' | 'out';

interface Device {
    device: number,
    vendorId: number,
    productId: number,
    productName: string,
    manufacturerName: string,
    serialNumber: string
}

interface ConnectionHandle {
    handle: number,
    vendorId: number,
    productId: number
}

interface EndpointDescriptor {
    address: number,
    type: 'control' | 'interrupt' | 'isochronous' | 'bulk',
    direction: Direction,
    maximumPacketSize: number,
    synchronization?: 'asynchronous' | 'adaptive' | 'synchronous',
    usage?: 'data' | 'feedback' | 'explicitFeedback',
    pollingInterval?: number,
    extra_data: ArrayBuffer
}

interface InterfaceDescriptor {
    interfaceNumber: number,
    alternateSetting: number,
    interfaceClass: number,
    interfaceSubclass: number,
    interfaceProtocol: number,
    description?: string,
    endpoints: EndpointDescriptor[],
    extra_data: ArrayBuffer
}

interface ConfigDescriptor {
    active: boolean,
    configurationValue: number,
    description?: string,
    selfPowered: boolean,
    remoteWakeup: boolean,
    maxPower: number,
    interfaces: InterfaceDescriptor[],
    extra_data: ArrayBuffer
}

interface GenericTransferInfo {
    direction: Direction,
    endpoint: number,
    length?: number,
    data?: ArrayBuffer,
    timeout?: number
}

interface TransferResultInfo {
    resultCode: number,
    data?: ArrayBuffer
}

interface DeviceFilter {
    vendorId?: number,
    productId?: number,
    interfaceClass?: number,
    interfaceSubclass?: number,
    interfaceProtocol?: number
}

export const usb = {
    getDevices() {
        
    },
    
    getUserSelectedDevices() {
        
    },
    
    getConfigurations() {
        
    },
    
    requestAccess() {
        
    },
    
    openDevice() {
        
    },
    
    findDevices() {
        
    },
    
    closeDevice() {
        
    },
    
    setConfiguration() {
        
    },
    
    getConfiguration() {
        
    },
    
    listInterfaces() {
        
    },
    
    claimInterface() {
        
    },
    
    releaseInterface() {
        
    },
    
    setInterfaceAlternateSetting() {
        
    },
    
    controlTransfer() {
        
    },
    
    bulkTransfer() {
        
    },
    
    interruptTransfer() {
        
    },
    
    isochronousTransfer() {
        
    },
    
    resetDevice() {
        
    }
}