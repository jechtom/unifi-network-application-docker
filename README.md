# Unifi Network Application Docker

This project allows you to run the Unifi Network Application locally. All data is stored in the "data" folder and can be transferred to another machine.

The service can be run all the time or started as needed, it does not need to run continuously.

To enable DBGate, uncomment the relevant section in the `compose.yml` file. DBGate is an optional component that allows you to access the Unifi database using a web-based database manager.

## Usage

1. Make sure you have Docker installed on your machine.

2. Clone this repository to your local machine.

3. Navigate to the project directory.

4. Run the following command to start the Unifi Network Application:

    ```bash
    docker-compose up --detach
    ```

    This will start the Unifi Network Application container and its dependencies.

5. Access the Unifi Network Application by opening the following URL in your web browser:

    ```
    https://localhost:8443
    ```

    Note: If you have enabled DBGate, you can access the Unifi database using the web-based database manager at `https://localhost:8444`.

## Configuration

The `compose.yml` file contains the configuration for the Unifi Network Application and its dependencies. You can modify the environment variables and ports as needed.

### Unifi Network Application

The `unifi-network-application` service is responsible for running the Unifi Network Application. It is based on the [`linuxserver/unifi-network-application`](https://github.com/linuxserver/docker-unifi-network-application) Docker image.

## Device Adoption

To adopt other devices, such as an Access Point, in Unifi, you need to change the inform IP address. By default, Unifi runs inside Docker using an IP address that is not accessible by other devices. Follow these steps to change the inform IP address:

1. Go to Settings > System > Advanced in the Unifi Network Application.

2. Set the Inform Host to a hostname or IP address that is accessible by your devices.

3. Check the "Override" checkbox to allow devices to connect to the controller during adoption. Devices use the inform-endpoint during adoption.

Note: If you need to change the port, make sure to change it on both sides and manually update the system.properties file. Otherwise, devices will initially communicate but then break after.

Source: https://hub.docker.com/r/linuxserver/unifi-network-application

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.