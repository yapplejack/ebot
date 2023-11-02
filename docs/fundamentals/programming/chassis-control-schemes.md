---
sidebar_label: 'Chassis Control Schemes'
sidebar_position: 4
---

# Chassis Control Schemes

This is covered in the WPI docs but not at a super low level, I think it could be dumbed down.

<br/>

TODO: adapt my Romi manual for this, add importing script to doc.

<br/>

Driving Controls

Before we can program the driving of the robot we must first understand what a drivetrain is and how to best go about controlling it. The drivetrain is the sum of all components that allow a robot to move along the ground. In our case this robot has something called a differential drive. Robots with differential drives move forward and backwards as you would expect by spinning the wheels forwards or backwards at the same speed. Turning is less straightforward and there are different ways to turn depending on the situation. To change the direction the robot is facing you can turn the wheels in opposite directions. This maneuver will keep the robot in place but that might be undesirable in some situations. Instead you can power a single wheel, this will turn the robot using the unpowered wheel as a pivot point. Finally the robot can make slower turns while moving forwards by powering both wheels in the same direction but underpowering the side you want to turn towards.

Now that you know the basics of the differential drivetrain’s movements let's talk about controlling it. There are many different ways to control the drivetrain with a gaming controller and you will be implementing and using two of the most popular styles.

We will start by talking about Arcade Drive, which is closest to what you might encounter in old video games. You already have some experience with this style if you drove the robot around during the setup. Arcade drive works by using a left-right X-axis and an up-down Y-axis. These axes can be on the same stick or on different sticks. Moving the Y-axis up will move the robot forward and down will move the robot backwards. Combining them by pushing the control stick on a diagonal will work as expected, pushing 80% up and 20% left will power both wheels forwards and underpower the left side by 20%, thus turning to the left. The right wheel will have 80% power and the left will have 60%. Reversing the situation; pushing 20% up and 80% left will power the right side of the drivetrain at 80% and the left motor at -60% percent, thus turning significantly more heavily but still moving “forwards”.

The other main style is Tank Drive. Instead of an X and Y axis, Tank Drive uses two Y axes. The left stick can power the left side of the drivetrain forwards or backwards. The right stick can do the same by moving up or down. Then you should be able to control any desired movements by powering each side of the drivetrain approximately for your desired movement.

Now that we have covered some of the basics we will dive into coding. First we will be loading an example that will serve as the base code for the remainder of this guide. Loading this example will also be a decent base for your FRC robot code.

<br/>

Loading the Arcade Drive Example

We will load the arcade drive example just like we loaded the Romi reference. In VSCode, use Ctrl+Shift+P or click the W symbol in the upper right corner and type “create a new project”. Select “example,” “java,” and “Arcade Drive.” Choose your code folder, properly name your project, enter your team’s number (any number can be used for this but make sure to use your team’s number in season), enable desktop support and then generate the project.



In the leftmost part of the window you will see there are some icons, select the one that looks like two sheets of paper if it is not already highlighted. Then find the file named “build.gradle” and click on it.



Scroll down in the file until you see the following section: 

Click the end of the “wpi.sim.addDriverstation()” line and hit enter twice.

Then add the following lines to the files by typing them or copying and pasting the text, making sure to match the IPv4 setup earlier with the “10.0.0.X” string (“10.0.0.2 is default): 
wpi.sim.envVar("HALSIMWS_HOST", "10.0.0.2")
wpi.sim.addWebsocketsServer().defaultEnabled = true
wpi.sim.addWebsocketsClient().defaultEnabled = true



These lines of code will ensure that we can use the Romi with the robot simulator. These lines of code are only needed when working with Romi and should be excluded if working on a FRC robot.

Next we will want to verify the control scheme in the arcade drive example. On the left side of the screen in the file explorer look for the folder named src\main. From src\main find java\frc\robot and then select the file Robot.java. This file is where we will write all of our code. Using only this file will be fine for the scope of this project but more complex robots will benefit from more files, this will be covered later on.

Once inside you should see many things, at the top you will see comments, lines that start with “//” and exist to write notes about the code. Then you will see some libraries which are imported, these libraries give us FRC specific classes and functions. The last structure to point out at this point is the Robot class. We will write the majority of our code within the brackets of the Robot class.

Currently the robot will be controlled on a single stick, moving the stick up and down moves the robot back and forth and moving the stick side to side will turn the robot. Some people prefer to have the “driving” on one stick and the steering on the other. If you want to use separate sticks you will need to modify the code in teleopPeriodic():

m_robotDrive.arcadeDrive(-m_stick.getY(), m_stick.getX());

You should be able to hover over the methods that m_stick calls but unfortunately the mapping depends on the controller, typically getY and getX will only use the left stick. We will need to figure out the mapping of our controller to fix this issue. To do this, use the shortcut Ctrl+Shift+P or click on the W in the upper right of VSCode and type “simulate robot.” Drag the controller you want to use from the System Joysticks panel into Joystick[0] in the Joysticks panel and then move the stick up that you want for your up and down movement. Take note of that axis and then do the same for side to side movement.



Now we should know the axes that we want to bind our steering to, so we may return to the line of code that we want to modify. We will replace getY with getRawAxis([up-down axis number]) and do the same for getX with your right-left axis number. Here is what ours looked like using a PS4 controller:

Now test the robot’s driving. Turn on the Romi, connect to the robot’s wifi and then in VSCode use the shortcut Ctrl+Shift+P or click the W in the upper right and select “Simulate robot code.” Hit OK, make sure you have the proper controller in Joystick[0], and then select “teleoperated” in the robot state panel. Drive the robot around for a few minutes and fill out the chart below with the path the robot will take given the state of the controller.
example
              
           








                      
100% up                     neutral











                      
~25% up                  ~25% left











                       
100% up                  ~25% left










                      
100% down             ~50% left










                         
Neutral                  100% right










                         
~25% up                100% right

After filling in the table hopefully you have a more initiative understanding of the arcade drive control scheme. You can also try to revert the controls so that both steering and moving forward/backwards are on the same stick. Having both on the same stick does allow something else on the other stick. It is all up to personal preference, whatever feels best for the driver is the best control scheme.

If you have errors when you run code above try connecting to the internet, simulating robot code, then close the simulation, hit the square button near the command palette, reconnect to your Romi and try simulating again. At the end of the manual is our code, you can copy and paste the code or make sure it is identical. If the issue is not resolved you may need to reimage your Romi or run the robot simulator while connected to the internet and then reconnect to the Romi.

<br/>

Tank Drive
Now that you have tried arcade drive we can try the other main control setup: Tank Drive. To switch to this control scheme we will need to look at the teleopPeriodic() function again. All we need to do is simulate the robot code again and find the up-down axis on both sticks. As a reminder use ctrl+shift+p to open the command pallet and type “simulate robot code”. From there make sure you have dragged the controller into the proper spot and note the proper axes.

Go back to the line that starts with m_robotDrive.arcadeDrive. Highlight the word arcadeDrive, type “tankDrive” and hit enter. You should be able to hover over tankDrive and see the two inputs that the function wants in the upper most part of the box. We can see that the leftmost input will be the left speed and the input after the coma wants a right speed. We will simply enter in the correct axis number as shown below, making sure to remove the negative in front of the first m_stick value. Here is what our values were for a PS4 controller:

m_robotDrive.tankDrive(m_stick.getRawAxis(1), m_stick.getRawAxis(5));

The next small section is useful to those who are interested in flight sticks or using 2 controllers, if that does not apply to you, skip to using the robot simulation step on the next page.

Some drivers also prefer using flight stick style controllers for tank drive, using one flight stick for each side of the drivetrain. In order to use a 2nd controller local the line that declares the initial controller: 

private final Joystick m_stick = new Joystick(0);

Copy this line and then paste it below by first clicking and dragging to highlight the text then hold Ctrl and press C. Then click the line below, hold down Ctrl again and press V. Remove the joystick declaration and replace it with the following two lines of code: 



Note the changes from the original being the change in name of the joystick class to distinguish between the two joysticks and that the right joystick will be taken from joystick slot 1. Now we will need to modify the code in teleopPeriodic. Double click arcadeDrive to select the text and then type tankDrive. If you hover over the tankDrive method you will see that it wants two doubles, a high precision decimal point number, that correspond to the left and right flight stick’s Y axis or the forwards and backwards movement of the flight stick. Your line of code will look like the following:

m_robotDrive.tankDrive(m_stick_left.getY(axis num here), m_stick_right.getY(axis num here));
Once again we will simulate the robot code. Turn on the Romi and connect to its wifi. Use Ctrl+Shift+P to open the command palette and search for “Simulate robot code” or use the arrow keys to highlight the command and hit enter. Click and drag your controller to correct joystick slots based on your setup if they are not there (joystick 0 for controller and joystick 0&1 for flight sticks). Use the teleoperated button in robot state to drive it around and make sure to disable the robot when you are finished. 

Drive the bot around for a few minutes and get a feeling for the control layout. Ask yourself if this layout feels more intuitive to you or if arcade drive feels better. Finally fill in the path for the controller combinations in the chart below to solidify your understanding of the controls.
