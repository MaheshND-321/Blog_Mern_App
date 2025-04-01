export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About Sahand' Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Mahi's Blog! This blog was created by Mahesh Devraj as
              a personal project to share his thoughts and ideas with the world.
              As a dedicated Full Stack Developer, I have honed my expertise in
              both frontend and backend technologies, enabling me to build
              robust and scalable web applications. My proficiency spans across
              frameworks such as Django and Flask for backend development, while
              I leverage React.js and Next.js for crafting dynamic and
              interactive user interfaces. Additionally, I am well-versed in
              Express.js for handling server-side logic, ensuring seamless
              communication between the frontend and backend. My experience
              working with databases like MongoDB and PostgreSQL allows me to
              design efficient and optimized data structures, ensuring high
              performance and reliability in applications. With a deep
              understanding of modern development practices, I am confident in
              my ability to contribute effectively to any development team.
            </p>

            <p>
              Beyond my technical expertise, I have hands-on experience with
              containerization technologies such as Docker, which enables me to
              create, deploy, and manage applications in a scalable and
              efficient manner. I am also proficient in cloud platforms like AWS
              and Azure, leveraging their powerful infrastructure to deploy and
              maintain applications securely. My familiarity with cloud-based
              solutions allows me to design and implement architectures that are
              resilient, cost-effective, and optimized for performance. Whether
              it involves configuring virtual machines, setting up storage
              solutions, or implementing serverless functions, I have a strong
              grasp of cloud computing best practices, ensuring that
              applications run smoothly in production environments.
            </p>

            <p>
              Moreover, my experience extends to building real-time applications
              and integrating third-party APIs, including payment gateways and
              authentication services. I have successfully implemented secure
              and seamless authentication flows, including OAuth, Firebase
              Authentication, and multi-factor authentication, to enhance user
              security. Additionally, my work with payment gateways such as
              Razorpay and Stripe has enabled me to develop reliable and
              efficient e-commerce solutions. By ensuring smooth API
              integrations and optimizing data processing, I have contributed to
              the development of high-performance applications that meet
              industry standards. Given my diverse skill set and hands-on
              experience, I am confident that I can add significant value to
              your development team, helping to build innovative and efficient
              software solutions.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <CallToAction />
        </div>
      </div>
    </div>
  );
}
