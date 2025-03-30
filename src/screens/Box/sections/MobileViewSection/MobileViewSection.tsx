import {
  ChevronRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

export const MobileViewSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      text: "Resume Genius made my job search so much easier!",
      name: "Emily Johnson",
      position: "CEO, Tech Innovations",
      avatar: "/avatar-image-11.png",
    },
    {
      text: "A fantastic tool for creating professional resumes quickly.",
      name: "Michael Lee",
      position: "Position, Company name",
      avatar: "/avatar-image-11.png",
    },
    {
      text: "Highly recommend for anyone needing a standout resume.",
      name: "Name Surname",
      position: "Position, Company name",
      avatar: "/avatar-image-11.png",
    },
    {
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      name: "Name Surname",
      position: "Position, Company name",
      avatar: "/avatar-image-11.png",
    },
    {
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      name: "Name Surname",
      position: "Position, Company name",
      avatar: "/avatar-image-11.png",
    },
    {
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      name: "Name Surname",
      position: "Position, Company name",
      avatar: "/avatar-image-11.png",
    },
  ];

  // Features data for mapping
  const features = [
    {
      title: "ATS Optimization",
      description:
        "Get hired fast with our AI-based ATS Optimization. Easy, fast, Accurate.",
      image: "/placeholder-image-5.png",
    },
    {
      title: "Easy Customization",
      description:
        "Easily customize your resume with our user-friendly tools for a personalized touch.",
      image: "/placeholder-image-6.png",
    },
    {
      title: "Template Variety",
      description:
        "Choose from a wide range of professional resume templates tailored to your industry.",
      image: "/placeholder-image-7.png",
    },
  ];

  // Plan features data
  const planFeatures = {
    basic: [
      "No card needed",
      "Access to basic features",
      "24/7 customer support",
      "Regular updates included",
    ],
    pro: [
      "Access to all features",
      "ATS enchancing with AI",
      "Unlimited downloads",
      "Priority support access",
    ],
  };

  return (
    <section className="flex flex-col w-[375px]">
      {/* Header */}
      <header className="flex h-16 items-center justify-between pl-5 pr-3 py-0 w-full bg-white">
        <div className="inline-flex items-center gap-2 py-3">
          <img
            className="w-6 h-6"
            alt="AllResume.ai logo"
            src="/group-7-2.png"
          />
          <div className="inline-flex flex-col items-start">
            <div className="[font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#111416] text-base tracking-[0] leading-[22.4px]">
              AllResume.ai
            </div>
          </div>
        </div>

        <div className="flex w-12 h-12 items-center justify-center">
          <XIcon className="w-6 h-6" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col w-[375px] items-start gap-12 px-5 py-16 bg-white">
        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-start gap-5 w-full">
            <h1 className="font-heading-mobile-h1 font-[number:var(--heading-mobile-h1-font-weight)] text-[#05050c] text-[length:var(--heading-mobile-h1-font-size)] tracking-[var(--heading-mobile-h1-letter-spacing)] leading-[var(--heading-mobile-h1-line-height)] [font-style:var(--heading-mobile-h1-font-style)]">
              Create AI-Powered
              <br />
              ATS-Optimized
              <br />
              Resumes in Minutes
            </h1>

            <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#05050c] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
              Discover the essential tools designed to help you create standout
              resumes that will captivate potential employers with ease and
              efficiency, ensuring you effectively showcase your skills and
              achievements in a way that makes a lasting impression.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Button className="px-6 py-2.5 bg-[#636ae8] rounded-xl">
              <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Get Started Free
              </span>
            </Button>

            <Button
              variant="outline"
              className="px-6 py-2.5 rounded-xl border-[#05050c26]"
            >
              <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#05050c] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                See Templates
              </span>
            </Button>
          </div>
        </div>

        <img
          className="w-full h-[348px] object-cover"
          alt="Resume builder preview"
          src="/placeholder-image-4.png"
        />
      </section>

      {/* Features Section */}
      <section className="flex flex-col w-[375px] items-start gap-12 px-5 py-16 bg-white">
        <div className="flex flex-col items-start gap-5 w-full">
          <div className="flex flex-col items-start gap-3 w-full">
            <h2 className="text-[length:var(--heading-mobile-h2-font-size)] tracking-[var(--heading-mobile-h2-letter-spacing)] leading-[var(--heading-mobile-h2-line-height)] font-heading-mobile-h2 font-[number:var(--heading-mobile-h2-font-weight)] text-[#05050c] [font-style:var(--heading-mobile-h2-font-style)]">
              Key Features
            </h2>
          </div>

          <div className="font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] font-text-regular-normal text-[#05050c] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
            {""}
          </div>
        </div>

        <div className="flex flex-col items-start gap-12 w-full">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start gap-6 w-full">
              <img
                className="w-full h-[198px] object-cover"
                alt={feature.title}
                src={feature.image}
              />

              <div className="flex flex-col items-start gap-5 w-full">
                <h4 className="text-[length:var(--heading-mobile-h4-font-size)] tracking-[var(--heading-mobile-h4-letter-spacing)] leading-[var(--heading-mobile-h4-line-height)] font-heading-mobile-h4 font-[number:var(--heading-mobile-h4-font-weight)] text-[#05050c] [font-style:var(--heading-mobile-h4-font-style)]">
                  {feature.title}
                </h4>

                <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#05050c] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Button
            variant="outline"
            className="px-6 py-2.5 rounded-xl border-[#05050c26]"
          >
            <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#05050c] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
              Try Now
            </span>
          </Button>

          <Button variant="ghost" className="flex items-center gap-2 px-0">
            <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#05050c] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
              Learn More
            </span>
            <ChevronRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="flex flex-col w-[375px] items-start gap-12 px-5 py-16 bg-white">
        <div className="flex flex-col items-start gap-5 w-full">
          <h2 className="text-[length:var(--heading-mobile-h2-font-size)] tracking-[var(--heading-mobile-h2-letter-spacing)] leading-[var(--heading-mobile-h2-line-height)] font-heading-mobile-h2 font-[number:var(--heading-mobile-h2-font-weight)] text-[#05050c] [font-style:var(--heading-mobile-h2-font-style)]">
            Customer Testimonials
          </h2>

          <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] text-[#05050c] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
            Our clients love the results we deliver!
          </p>
        </div>

        <div className="flex flex-col items-start gap-8 w-full">
          <div className="flex items-start gap-6 w-full overflow-x-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[300px] border-[#05050c26] rounded-2xl"
              >
                <CardContent className="flex flex-col items-start gap-5 p-6">
                  <div className="flex flex-col items-start gap-5 w-full">
                    <img
                      className="flex-shrink-0"
                      alt="Five stars rating"
                      src="/stars.svg"
                    />

                    <p className="text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#05050c] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                      {testimonial.text}
                    </p>
                  </div>

                  <div className="flex flex-col items-start justify-center gap-4 w-full">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar} alt="User avatar" />
                      <AvatarFallback>User</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col items-start w-full">
                      <h5 className="font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[length:var(--text-regular-semi-bold-font-size)] leading-[var(--text-regular-semi-bold-line-height)] text-[#05050c] tracking-[var(--text-regular-semi-bold-letter-spacing)] [font-style:var(--text-regular-semi-bold-font-style)]">
                        {testimonial.name}
                      </h5>

                      <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] text-[#05050c] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-start gap-2">
              <Badge
                variant="default"
                className="w-2 h-2 p-0 rounded-full bg-[#05050c]"
              />
              <Badge
                variant="default"
                className="w-2 h-2 p-0 rounded-full bg-[#05050c] opacity-20"
              />
              <Badge
                variant="default"
                className="w-2 h-2 p-0 rounded-full bg-[#05050c] opacity-20"
              />
              <Badge
                variant="default"
                className="w-2 h-2 p-0 rounded-full bg-[#05050c] opacity-20"
              />
            </div>

            <div className="flex items-start gap-4">
              <Button
                variant="outline"
                size="icon"
                className="p-3 rounded-lg border-[#05050c26]"
              >
                <img
                  className="w-6 h-6"
                  alt="Previous testimonial"
                  src="/icon---left-arrow-alt.svg"
                />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="p-3 rounded-lg border-[#05050c26]"
              >
                <img
                  className="w-6 h-6"
                  alt="Next testimonial"
                  src="/icon---right-arrow-alt.svg"
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="flex flex-col w-[375px] items-center gap-20 px-5 py-16 bg-white">
        <div className="w-[335px] flex flex-col items-center gap-3">
          <Badge variant="outline" className="bg-transparent border-none">
            <span className="font-heading-desktop-tagline font-[number:var(--heading-desktop-tagline-font-weight)] text-[#05050c] text-[length:var(--heading-desktop-tagline-font-size)] text-center tracking-[var(--heading-desktop-tagline-letter-spacing)] leading-[var(--heading-desktop-tagline-line-height)] [font-style:var(--heading-desktop-tagline-font-style)]">
              Plans
            </span>
          </Badge>

          <div className="flex flex-col items-center gap-5 w-full">
            <h2 className="text-[length:var(--heading-mobile-h2-font-size)] text-center tracking-[var(--heading-mobile-h2-letter-spacing)] leading-[var(--heading-mobile-h2-line-height)] font-heading-mobile-h2 font-[number:var(--heading-mobile-h2-font-weight)] text-[#05050c] [font-style:var(--heading-mobile-h2-font-style)]">
              Pricing Options
            </h2>

            <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] text-[#05050c] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
              Choose the plan that fits your needs best.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-12 w-full">
          <ToggleGroup
            type="single"
            defaultValue="monthly"
            className="p-1 bg-white rounded-[10px] border border-solid border-[#05050c26]"
          >
            <ToggleGroupItem
              value="monthly"
              className="px-6 py-2.5 rounded-lg border border-solid border-[#05050c26]"
            >
              <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#05050c] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Monthly
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="quarterly"
              className="px-6 py-2.5 rounded-lg border border-solid border-transparent"
            >
              <span className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#05050c] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                Quarterly
              </span>
            </ToggleGroupItem>
          </ToggleGroup>

          <div className="flex flex-col items-center gap-8 w-full">
            <Card className="flex flex-col items-center gap-8 px-6 py-8 w-full rounded-2xl border-[#05050c26]">
              <CardContent className="flex flex-col items-center gap-6 p-0 w-full">
                <div className="flex flex-col items-center gap-2 w-full">
                  <h6 className="text-[length:var(--heading-mobile-h6-font-size)] text-center tracking-[var(--heading-mobile-h6-letter-spacing)] leading-[var(--heading-mobile-h6-line-height)] font-heading-mobile-h6 font-[number:var(--heading-mobile-h6-font-weight)] text-[#05050c] [font-style:var(--heading-mobile-h6-font-style)]">
                    Basic Plan
                  </h6>

                  <h3 className="font-heading-mobile-h1 font-[number:var(--heading-mobile-h1-font-weight)] text-[#05050c] text-[length:var(--heading-mobile-h1-font-size)] text-center tracking-[var(--heading-mobile-h1-letter-spacing)] leading-[var(--heading-mobile-h1-line-height)] [font-style:var(--heading-mobile-h1-font-style)]">
                    Free
                  </h3>
                </div>

                <div className="flex flex-col items-start gap-4 py-2 w-full">
                  {planFeatures.basic.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 w-full">
                      <img className="w-6 h-6" alt="Check" src="/check.svg" />
                      <span className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] text-[#05050c] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <Button className="w-full px-6 py-2.5 bg-[#636ae8] rounded-xl">
                <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                  Get started
                </span>
              </Button>
            </Card>

            <Card className="flex flex-col items-center gap-8 px-6 py-8 w-full rounded-2xl border-[#05050c26]">
              <CardContent className="flex flex-col items-center gap-6 p-0 w-full">
                <div className="flex flex-col items-center gap-2 w-full">
                  <h6 className="text-[length:var(--heading-mobile-h6-font-size)] text-center tracking-[var(--heading-mobile-h6-letter-spacing)] leading-[var(--heading-mobile-h6-line-height)] font-heading-mobile-h6 font-[number:var(--heading-mobile-h6-font-weight)] text-[#05050c] [font-style:var(--heading-mobile-h6-font-style)]">
                    Pro Plan
                  </h6>

                  <h3 className="font-heading-mobile-h1 font-[number:var(--heading-mobile-h1-font-weight)] text-[#05050c] text-[length:var(--heading-mobile-h1-font-size)] text-center tracking-[var(--heading-mobile-h1-letter-spacing)] leading-[var(--heading-mobile-h1-line-height)] [font-style:var(--heading-mobile-h1-font-style)]">
                    $15/mo
                  </h3>
                </div>

                <div className="flex flex-col items-start gap-4 py-2 w-full">
                  {planFeatures.pro.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 w-full">
                      <img className="w-6 h-6" alt="Check" src="/check.svg" />
                      <span className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] text-[#05050c] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <Button className="w-full px-6 py-2.5 bg-[#636ae8] rounded-xl">
                <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                  Get started
                </span>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col w-[375px] items-center gap-12 px-5 py-16 bg-white">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-col items-center gap-5 w-full">
            <h2 className="text-[length:var(--heading-mobile-h2-font-size)] text-center tracking-[var(--heading-mobile-h2-letter-spacing)] leading-[var(--heading-mobile-h2-line-height)] font-heading-mobile-h2 font-[number:var(--heading-mobile-h2-font-weight)] text-[#05050c] [font-style:var(--heading-mobile-h2-font-style)]">
              Get hired fast with Allresume.ai
            </h2>

            <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] text-[#05050c] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
              Start you journey today with our Ai resume builder!
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Button className="px-6 py-2.5 bg-[#636ae8] rounded-xl">
              <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Sign Up
              </span>
            </Button>

            <Button
              variant="outline"
              className="px-6 py-2.5 rounded-xl border-[#05050c26]"
            >
              <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#05050c] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Learn More
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col w-[375px] items-center gap-12 px-5 py-12 bg-[#eff0fc]">
        <div className="flex flex-col items-center gap-12 w-full">
          <div className="flex items-center justify-center gap-2 py-3 w-full">
            <img
              className="w-6 h-6"
              alt="AllResume.ai logo"
              src="/group-7-3.png"
            />
            <div className="inline-flex flex-col items-start">
              <div className="[font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#111416] text-base tracking-[0] leading-[22.4px]">
                AllResume.ai
              </div>
            </div>
          </div>

          <nav className="flex flex-col items-center gap-6 w-full">
            <a
              href="#"
              className="font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[#05050c] text-[length:var(--text-small-semi-bold-font-size)] text-center tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)]"
            >
              Features
            </a>
            <a
              href="#"
              className="font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[#05050c] text-[length:var(--text-small-semi-bold-font-size)] text-center tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)]"
            >
              Pricing
            </a>
            <a
              href="#"
              className="font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[#05050c] text-[length:var(--text-small-semi-bold-font-size)] text-center tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)]"
            >
              User Guides
            </a>
            <a
              href="#"
              className="font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[#05050c] text-[length:var(--text-small-semi-bold-font-size)] text-center tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)]"
            >
              About Us
            </a>
            <a
              href="#"
              className="font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[#05050c] text-[length:var(--text-small-semi-bold-font-size)] text-center tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)]"
            >
              Contact Us
            </a>
          </nav>

          <div className="flex items-start justify-center gap-3 w-full">
            <FacebookIcon className="w-6 h-6" />
            <InstagramIcon className="w-6 h-6" />
            <img
              className="w-6 h-6"
              alt="XIcon (Twitter) icon"
              src="/icon---x-1.svg"
            />
            <LinkedinIcon className="w-6 h-6" />
            <YoutubeIcon className="w-6 h-6" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-full pb-4">
          <Separator className="w-full h-px" />

          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <a
                href="#"
                className="font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[#05050c] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline [font-style:var(--text-small-link-font-style)]"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[#05050c] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline [font-style:var(--text-small-link-font-style)]"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[#05050c] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline [font-style:var(--text-small-link-font-style)]"
              >
                Cookies Settings
              </a>
            </div>

            <p className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[#05050c] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
              © 2025 Allresume.ai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};
