import serial
import sys

input_string = ""
if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python your_python_script.py <input_string>")
        sys.exit(1)
    input_string = sys.argv[1]

parts = input_string.split('_')
ser = serial.Serial()
ser.braudrate = int(parts[1])
ser.port = parts[0]

try:    
    ser.open()
except:
    print("0")

if ser.isOpen():
    print("1")
    sys.stdout.flush()
ser.close()
sys.stdout.flush()

