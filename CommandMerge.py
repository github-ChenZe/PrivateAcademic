import re

# file_name1 = raw_input('The first file name >>> ')
# file_name2 = raw_input('The second file name >>> ')

file_name1 = 'QuantumMechanics/QuantumMechanics.tex'
# file_name2 = 'MathematicalMethodsInThePhysicalSciences/MathMth.tex'
file_name2 = 'CommonHead/CommonHead.tex'
path = '/Users/zechen/Documents/PrivateAcademic/'

tex1 = open(path + file_name1, 'r').read()
tex2 = open(path + file_name2, 'r').read()

command_re = re.compile(r'\\newcommand\{\\([A-Za-z]*)\}(.*)')

commands = {}

for command in command_re.findall(tex1):
	commands[command[0]] = command[1]

for command in command_re.findall(tex2):
	if (command[0] in commands) and (command[1] != commands[command[0]]):
		print command[0], command[1], commands[command[0]]
