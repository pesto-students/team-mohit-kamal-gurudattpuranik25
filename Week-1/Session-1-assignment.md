# Web Fundamentals

### 1. What is a protocol stack, and how is it used in web development?

--> A protocol stack, also known as network stack is a collection of networking protocols that are organized in a hierarchy. Each stack serves a specific purpose and handles different aspects of communication process.

The stack consists of four layers,

1. Link layer: It is responsible for providing reliable data transfer between two nodes on the network segment. This is achieved by encapsulating data from the network layer into frames or packets, which are then transmitted over the physical medium. Link layer also facilitates error free data transmission.
   Common link layer protocols include,
   • Ethernet
   • Wireless LAN
2. Network layer: This layer is responsible for routing data packets across the network. It breaks the data into smaller units called packets and sends them to correct destination. The internet protocol (IP) is the primary protocol at this layer.
3. Transport layer: This layer is responsible for ensuring that the data is delivered in the correct order. It creates a connection between the two parties and facilitates correct transmission.
   Two prominent protocols of this layer are,
   • TCP
   • UDP
4. Application layer: This layer is the highest layer in the protocol stack. Application layer is where users interact with the application or services running on the network. Protocols of this layer include,
   • HTTP
   • TLS
   • DNS

   ##### A web development protocol stack includes the following,

   ##### Application layer:

   This layer is responsible for running the applications or services on the web development stack. It includes browsers, content management systems.

   ##### Rendering layer:

   This layer is where users interact with web applications. Its also called client-side/front-end layer. It is dominated by technologies (HTML, CSS, JS) that help in interacting with the application.

   ##### Data storage layer:

   This layer facilitates data storage and retrieval. Technologies used this layer include SQL, MongoDB etc.

   ##### Data exchange layer:

   It deals with data exchange and transmission. HTTP is one of the prominent protocols used in this layer.

   ##### Server-side processing layer:

   This is responsible for handling requests and generating responses. Technologies like Java, Python, and Node JS help in this layer.

### 2. What are the different types of web servers, and how do they differ in terms of functionality and performance?

--> Some of the most popular web servers are,

1. Apache HTTP server: This is one of the most widely used open-source web servers. It is known for its flexibility and stability. Apache web server can easily be installed on almost all the operating systems.
2. Nginx: Nginx is also an open-source web server but mostly focusses on performance and scalability. It is a static & dynamic web server.
3. Tomcat: Tomcat is a popular application web-server developed by Apache. It is primarily designed to run Java web applications.
4. Microsoft Internet Information Services (IIS): IIS is a web server developed by Microsoft exclusively for windows operating systems and hence becomes a lot easier to configure and administer.
5. Lighttpd: Lighttpd is a free and open-source web server written in C language. As the name suggests, the server uses very less CPU power and hence facilitates high performance and efficiency.

### 3. What is web hosting, and what are the different types of hosting services available for websites?

--> Web hosting is the service that stores website’s files & data and makes them available for users over the internet. There are several types of web hosting services that come with different levels of control and scalability. Some of them are listed below,

1. Shared hosting: Shared hosting is one of the most cost-effective hosting services available and is mainly used of small websites that have very less traffic. All the resources such as power, storage is shared among the hosted websites and can be slow if there a surge in traffic.
2. Virtual private server (VPS) hosting: In VPS hosting, a physical server is divided into multiple virtual servers and each server functions independently. This way, the resources are not shared unlike shared hosting and instead helps in flexibility and scalability.
3. Dedicated hosting: This is one of the most expensive hosting services. It offers complete control over the server’s resources and configurations. Dedicated hosting is most suitable for large websites where traffic is generally high.
4. Cloud hosting: It is a type of web hosting that uses cloud computing platform to store and deliver the content. It uses multiple inter-connected servers to host websites. Cloud hosting provide high flexibility and reliability as it is not dependent on one physical server.

### 4. What is scaling, and why is it important for web applications? How does scaling differ for vertical and horizontal scaling?

--> Scaling is a process of expanding the resources or infrastructure to meet the growing demands without hampering the performance.
Scaling is important for web application the following ways,

1. User experience: By scaling, one can enhance user experience by not allowing the website to crash or by reducing the time taken for page loads.
2. Performance. As user base and traffic increases, scaling becomes an important factor to take into account to reduce slowdowns, latency and crashes.
3. Reliability: By making websites less exposed to outages, one can increase the reliability because when one server goes down, other servers take on the load and maintain the traffic.
4. Cost efficiency: Scaling helps in optimal usage of resources and hence reduce the cost. With the help of cloud computing technologies, one can only pay for what they use (use more resources during high demand and traffic and pay only for that duration).

### 5. What is SEO (Search Engine Optimization), and how can web developers optimize their websites for better search engine rankings?

--> SEO is a process of optimizing a website and its content to improve the ranking on search engine results pages (SERPs).
Ways to optimize websites for search engines include,

1. Content quality: Creating high quality content with relevance is one of the most effective techniques to optimize the websites. Content provided in the website must match the user’s query and this helps in user engagement and retention.
2. Website structure: Websites should be neatly structured with all the necessary navigation links. A good structure helps crawler to understand the content better.
3. Responsiveness: A good website must provide seamless user experience on all type of devices. This includes faster loading time, easy navigation etc.
4. User experience: Enhance user experience by providing proper navigation links for internal pages, faster loading, and clear call-to-action.
5. On-page optimization: Optimizing on-page information such as description, metadata, and title helps the crawler to understand the content better.
6. Page speed: Page loading time should be reduced as much as possible by implementing lazy loading on images, caching, by not loading the un-necessary scripts etc. to rank the better in search results.
