import sys
import glob
import serial


def serial_ports():
    """ Lists serial port names

        :raises EnvironmentError:
            On unsupported or unknown platforms
        :returns:
            A list of the serial ports available on the system
    """
    if sys.platform.startswith('win'):
        ports = ['COM%s' % (i + 1) for i in range(256)]
        result = []
        for port in ports:
            try:
                s = serial.Serial(port)
                # s.open()
                s.close()
                result.append(port)
            except (OSError, serial.SerialException):
                pass
        return result
            # print(ports)

    elif sys.platform.startswith('linux') or sys.platform.startswith('cygwin'):
        ports = glob.glob('/dev/ttyS*')
        return ports
    
    elif sys.platform.startswith('darwin'):
        ports = glob.glob('/dev/tty.*')
    
    else:
        raise EnvironmentError('Unsupported platform')


if __name__ == '__main__':
    a = serial_ports()
    for item in a:
        print(item)