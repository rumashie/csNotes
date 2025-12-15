# backend engineering fundamentals

#### How the internet works

The internet is a "network of networks". {graphic}

It connects devices together using a set of _standardized protocols_. There are many different devices and tools that help faciliate this...  
There are _routers_ that recieve the data being exchanged in packets. A router examines the packet and forwards the packet to the next router in the path towards its destination.

Main Protocols:

- **Internet Protocol (IP)**: is responsbile for addressing and routing packets to their correct destination (where packets go)

- **Transmission Control Protocol (TCP)**: ensures that packets are transmitted reliably and in the correct order (data is broken up into packets, need to be reassmebled, TCP does error checking to ensure this is all done correctly.)

Ports: Each application or Service is assigned a unique port number, to distinguish betweent the different apps running on the same server/device.
Socket: the combination of the IP address and a port number, that represents the specific endpoint for sending or receiving data. a network socket can also include the protocol being used (TCP)

Server is like an apartment building, ports are the individual apratments, socket is that unique apartment's mailbox.

- **Domain Name System (DNS)**: translates Domain names into IP addresses

- **Hypertext Transfer Protocol (HTTP)**: used to transfer data between client and server. Using the HTTP verbs GET, POST, PUT, PATCH, DELETE the client sends an HTTP request to the server, the server sends an HTTP response back to the client with the requested data.

- **Secure Sockets Layer/Transport Layer Security (SSL/TLS)**: encrypts data being transmitted over the internet

Certificate: A certificate is like an ID for a server, it formally describes the server, and provides other information necessary to establish communication (public key, domain info, dates etc). They are signed by a trusted third party (a Certificate Authority) to verify their authenticity. Clients usually don’t have certificates unless using mutual TLS.

Handshake: During the SSL/TLS handshake process, the client and server exchange information and negotiate the encryption algorithm and other parameters for the secure connection.
Encryption: different algorithms used to encrpyt, or alter the data, to avoid sending it in its raw form

More Details:

- https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm

#### HTTP/HTTPS

HTTP is an application layer protocol, it runs on top of other layers of the network protocol stack. For example, connecting to Wi-Fi is part of the lower level network stack. Wi-Fi happens at the physical and link layers, providing network access. Client-server HTTP/HTTPS is communication over the internet once network connection exists. {graphic} HTTP protocol is sent over TCP and TLS connection.

![alt text](image.png)

HTTP invovles a client device making a request to a server, which sends a response message.

A request contains:

- a HTTP method/verb
- a URL
- headers
- body

A response contains:

- status code (1xx, 2xx, 3xx, 4xx, 5xx)
- header
- body

Clarifications:

- A browser is software that acts as a client that can make HTTP requests, giving you access to the internet and rendering web applications. You can build local apps without a browser, but a browser is required to display web-based applications.
