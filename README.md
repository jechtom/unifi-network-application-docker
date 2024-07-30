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

For Unifi to adopt other devices, e.g. an Access Point, it is required to change the inform IP address. Because Unifi runs inside Docker by default it uses an IP address not accessible by other devices. To change this go to Settings > System > Advanced and set the Inform Host to a hostname or IP address accessible by your devices. Additionally the checkbox "Override" has to be checked, so that devices can connect to the controller during adoption (devices use the inform-endpoint during adoption).

Note that you must use 8080:8080. If you MUST change the port, it must be changed on both sides and manually changed in your system.properties file. Otherwise, devices will initially communicate and then break after.

Source: https://hub.docker.com/r/linuxserver/unifi-network-application

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.