import os
import sys
import subprocess

def whereis(binary):
    command = 'which' if os.name != 'nt' else 'where'
    try:
        sub = subprocess.run([command, binary], text=True, capture_output=True)
        return sub.stdout
    except BaseException as e:
        print(f"Warning: {binary} is not found")
        return ''