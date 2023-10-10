import glob
import platform

# Get the current operating system
current_os = platform.system()

# Determine the prefix for serial ports based on the operating system
if current_os == "Windows":
    port_prefix = "COM"
elif current_os == "Linux":
    port_prefix = "/dev/tty"
elif current_os == "Darwin":  # macOS
    port_prefix = "/dev/cu."
# Define the pattern to search for serial ports
serial_port_pattern = '/dev/ttyS*'  # You can also use '/dev/ttyUSB*' or other patterns

# Use glob to find matching serial ports
serial_ports = glob.glob(serial_port_pattern)

# Print the list of available serial ports
if not serial_ports:
    print("No serial ports found.")
else:
    for port in serial_ports:
        print(port)
