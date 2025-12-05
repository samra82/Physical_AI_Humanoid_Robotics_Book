## Step-by-Step Tutorials

### Tutorial 1: Launching and Monitoring Nav2 in Isaac Sim

This tutorial will guide you through the process of launching the Nav2 stack for a humanoid robot in a pre-configured Isaac Sim environment and monitoring its status.

**Prerequisites:**

*   A working installation of ROS 2, NVIDIA Isaac Sim, and the Isaac ROS bridge.
*   A simulated environment with a humanoid robot model loaded.
*   The Nav2 stack packages installed for your ROS 2 distribution.

**Steps:**

1.  **Launch Isaac Sim with ROS 2 Bridge:**
    *   Start your Isaac Sim application.
    *   Load your environment containing the humanoid robot.
    *   From the menu, go to `Window > Extensions` and enable `omni.isaac.ros2_bridge`.
    *   This will start the ROS 2 bridge, which connects Isaac Sim to your ROS 2 environment.

2.  **Launch the Nav2 Stack:**
    *   Open a new terminal and source your ROS 2 workspace.
    *   Use a `ros2 launch` command to bring up the Nav2 stack. The exact command will depend on your robot's configuration package. It typically looks like this:
        ```bash
        ros2 launch your_robot_nav2_pkg nav2_bringup.launch.py
        ```
    *   This command launches all the necessary Nav2 nodes, including the map server, AMCL for localization, and the planner and controller servers.

3.  **Verify Nav2 Status in RViz:**
    *   Open another terminal and launch RViz2, configured for Nav2:
        ```bash
        ros2 launch nav2_bringup rviz_launch.py
        ```
    *   In RViz, you should see:
        *   The robot's model in its environment.
        *   The global costmap, showing obstacles.
        *   The robot's pose, estimated by AMCL.
    *   If everything is green and the robot's position is correct, Nav2 is ready.

4.  **Set an Initial Pose:**
    *   If the robot's position is incorrect, you need to initialize it.
    *   In RViz, click the "2D Pose Estimate" button.
    *   Click and drag on the map to set the robot's starting position and orientation. This sends a `PoseWithCovarianceStamped` message to the `/initialpose` topic. AMCL will then refine this estimate.

5.  **Send a Navigation Goal:**
    *   In RViz, click the "Nav2 Goal" button.
    *   Click and drag on the map to set a goal position and orientation for the robot.
    *   You should see a global path (typically a blue line) appear, and the robot will start moving, following the local planner's commands.
    *   You can monitor the robot's progress in Isaac Sim and RViz.

This tutorial provides a foundational workflow for operating Nav2 with a simulated humanoid. The next step is to automate goal-sending with a Python script.
