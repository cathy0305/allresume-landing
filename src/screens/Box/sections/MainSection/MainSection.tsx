import {
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Separator } from "../../../../components/ui/separator";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

export const MainSection = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "Home Page", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Services", href: "#" },
  ];

  // Features data
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

  // Testimonials data
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
  ];

  // Pricing plans data
  const pricingPlans = [
    {
      title: "Basic Plan",
      price: "Free",
      features: [
        "No card needed",
        "Access to basic features",
        "24/7 customer support",
        "Regular updates included",
      ],
    },
    {
      title: "Pro Plan",
      price: "$15/mo",
      features: [
        "Access to all features",
        "ATS enchancing with AI",
        "Unlimited downloads",
        "Priority support access",
      ],
    },
  ];

  // Footer links data
  const footerLinks = [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "User Guides", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header/Navigation */}
      <header className="flex w-full h-[72px] items-center justify-center px-16 py-0 bg-white">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 py-3">
            <img className="w-6 h-6" alt="Logo" src="/group-7.png" />
            <div className="flex flex-col items-start">
              <div className="[font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#111416] text-base leading-[22.4px]">
                AllResume.ai
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-8">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      className="font-text-regular-normal text-[#05050c] text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] px-2"
                      href={item.href}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-2 font-text-regular-normal text-[#05050c] text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] px-2">
                      More Info
                      <ChevronDownIcon className="w-6 h-6" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>FAQ</DropdownMenuItem>
                      <DropdownMenuItem>Blog</DropdownMenuItem>
                      <DropdownMenuItem>Support</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4 ml-8">
              <Button
                variant="outline"
                className="px-5 py-2 rounded-xl border border-solid border-[#05050c26] font-text-regular-medium text-[#05050c]"
              >
                Log in
              </Button>
              <Button className="px-5 py-2 rounded-xl bg-[#636ae8] font-text-regular-medium text-white">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex w-full items-center gap-20 px-16 py-28 bg-white">
        <div className="flex flex-col items-start gap-8 flex-1">
          <div className="flex flex-col items-start gap-6 w-full">
            <h1 className="font-heading-desktop-h1 font-[number:var(--heading-desktop-h1-font-weight)] text-[#05050c] text-[length:var(--heading-desktop-h1-font-size)] tracking-[var(--heading-desktop-h1-letter-spacing)] leading-[var(--heading-desktop-h1-line-height)]">
              Create AI-Powered
              <br />
              ATS-Optimized
              <br />
              Resumes in Minutes
            </h1>
            <p className="font-text-medium-normal text-[#05050c] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
              Discover the essential tools designed to help you create standout
              resumes that will captivate potential employers with ease and
              efficiency, ensuring you effectively showcase your skills and
              achievements in a way that makes a lasting impression.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <Button className="px-6 py-2.5 bg-[#636ae8] rounded-xl font-text-regular-medium text-white">
              Get Started Free
            </Button>
            <Button
              variant="outline"
              className="px-6 py-2.5 rounded-xl border border-solid border-[#05050c26] font-text-regular-medium text-[#05050c]"
            >
              See Templates
            </Button>
          </div>
        </div>
        <img
          className="flex-1 h-[640px] object-cover"
          alt="Resume preview"
          src="/placeholder-image-4.png"
        />
      </section>

      {/* Features Section */}
      <section className="flex flex-col w-full items-start justify-center gap-20 px-16 py-28 bg-white">
        <div className="flex items-start gap-20 w-full">
          <div className="flex flex-col items-start gap-4 flex-1">
            <h2 className="font-heading-desktop-h2 text-[#05050c] text-[length:var(--heading-desktop-h2-font-size)] tracking-[var(--heading-desktop-h2-letter-spacing)] leading-[var(--heading-desktop-h2-line-height)]">
              Key Features
            </h2>
          </div>
          <div className="flex-1 font-text-medium-normal text-[#05050c] text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)]">
            {""}
          </div>
        </div>

        <div className="flex flex-col items-start gap-16 w-full">
          <div className="flex items-start gap-12 w-full">
            {features.map((feature, index) => (
              <Card key={index} className="flex-1 border-none shadow-none">
                <CardContent className="flex flex-col items-start gap-8 p-0">
                  <img
                    className="w-full h-60 object-cover"
                    alt={feature.title}
                    src={feature.image}
                  />
                  <div className="flex flex-col items-start gap-6 w-full">
                    <h4 className="font-heading-desktop-h4 text-[#05050c] text-[length:var(--heading-desktop-h4-font-size)] tracking-[var(--heading-desktop-h4-letter-spacing)] leading-[var(--heading-desktop-h4-line-height)]">
                      {feature.title}
                    </h4>
                    <p className="font-text-regular-normal text-[#05050c] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)]">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Button
            variant="outline"
            className="px-6 py-2.5 rounded-xl border border-solid border-[#05050c26] font-text-regular-medium text-[#05050c]"
          >
            Try Now
          </Button>
          <Button
            variant="ghost"
            className="flex items-center gap-2 font-text-regular-medium text-[#05050c]"
          >
            Learn More
            <ChevronRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="flex flex-col w-full items-start gap-20 px-16 py-28 bg-white overflow-hidden">
        <div className="flex flex-col w-[768px] items-start gap-6">
          <h2 className="font-heading-desktop-h2 text-[#05050c] text-[length:var(--heading-desktop-h2-font-size)] tracking-[var(--heading-desktop-h2-letter-spacing)] leading-[var(--heading-desktop-h2-line-height)]">
            Customer Testimonials
          </h2>
          <p className="font-text-medium-normal text-[#05050c] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
            Our clients love the results we deliver!
          </p>
        </div>

        <div className="flex flex-col items-start gap-8 w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="w-full p-8 rounded-2xl border border-solid border-[#05050c26]">
                    <CardContent className="p-0 space-y-6">
                      <div className="flex flex-col items-start gap-6 w-full">
                        <img
                          className="flex-[0_0_auto]"
                          alt="Five stars rating"
                          src="/stars.svg"
                        />
                        <p className="font-text-medium-normal text-[#05050c] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
                          {testimonial.text}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 w-full">
                        <Avatar className="w-12 h-12">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </Avatar>
                        <div className="flex flex-col items-start flex-1">
                          <div className="w-full font-text-regular-semi-bold text-[#05050c] text-[length:var(--text-regular-semi-bold-font-size)] leading-[var(--text-regular-semi-bold-line-height)]">
                            {testimonial.name}
                          </div>
                          <div className="w-full font-text-regular-normal text-[#05050c] text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)]">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex w-full items-center justify-between mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#05050c] rounded" />
                <div className="w-2 h-2 bg-[#05050c] rounded opacity-20" />
                <div className="w-2 h-2 bg-[#05050c] rounded opacity-20" />
                <div className="w-2 h-2 bg-[#05050c] rounded opacity-20" />
              </div>
              <div className="flex items-center gap-4">
                <CarouselPrevious className="static transform-none p-3 bg-white rounded-lg border border-solid border-[#05050c26]" />
                <CarouselNext className="static transform-none p-3 bg-white rounded-lg border border-solid border-[#05050c26]" />
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="flex flex-col w-full items-center gap-20 px-16 py-28 bg-white">
        <div className="flex flex-col w-[768px] items-center gap-4">
          <div className="flex items-center">
            <div className="font-heading-desktop-tagline text-[#05050c] text-[length:var(--heading-desktop-tagline-font-size)] text-center tracking-[var(--heading-desktop-tagline-letter-spacing)] leading-[var(--heading-desktop-tagline-line-height)]">
              Plans
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="font-heading-desktop-h2 text-[#05050c] text-[length:var(--heading-desktop-h2-font-size)] text-center tracking-[var(--heading-desktop-h2-letter-spacing)] leading-[var(--heading-desktop-h2-line-height)]">
              Pricing Options
            </h2>
            <p className="font-text-medium-normal text-[#05050c] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
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
              className="px-6 py-2.5 rounded-lg border border-solid border-[#05050c26] font-text-regular-medium text-[#05050c]"
            >
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem
              value="quarterly"
              className="px-6 py-2.5 rounded-lg border-transparent font-text-regular-normal text-[#05050c]"
            >
              Quarterly
            </ToggleGroupItem>
          </ToggleGroup>

          <div className="flex items-start gap-8 w-full">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className="flex-1 flex flex-col items-center justify-between p-8 rounded-2xl border border-solid border-[#05050c26]"
              >
                <CardContent className="p-0 w-full space-y-8">
                  <div className="flex flex-col items-center gap-2 w-full">
                    <h6 className="font-heading-desktop-h6 text-[#05050c] text-[length:var(--heading-desktop-h6-font-size)] text-center tracking-[var(--heading-desktop-h6-letter-spacing)] leading-[var(--heading-desktop-h6-line-height)]">
                      {plan.title}
                    </h6>
                    <div className="font-heading-desktop-h1 text-[#05050c] text-[length:var(--heading-desktop-h1-font-size)] text-center tracking-[var(--heading-desktop-h1-letter-spacing)] leading-[var(--heading-desktop-h1-line-height)]">
                      {plan.price}
                    </div>
                  </div>
                  <div className="flex flex-col py-2 gap-4 w-full">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-4 w-full"
                      >
                        <CheckIcon className="w-6 h-6" />
                        <div className="font-text-regular-normal text-[#05050c] text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)]">
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <Button className="w-full px-6 py-2.5 mt-8 bg-[#636ae8] rounded-xl font-text-regular-medium text-white">
                  Get started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col w-full items-center gap-20 px-16 py-28 bg-white">
        <div className="flex flex-col w-[768px] items-center gap-8">
          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="font-heading-desktop-h2 text-[#05050c] text-[length:var(--heading-desktop-h2-font-size)] text-center tracking-[var(--heading-desktop-h2-letter-spacing)] leading-[var(--heading-desktop-h2-line-height)]">
              Get hired fast with Allresume.ai
            </h2>
            <p className="font-text-medium-normal text-[#05050c] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
              Start you journey today with our Ai resume builder!
            </p>
          </div>
          <div className="flex items-start gap-4">
            <Button className="px-6 py-2.5 bg-[#636ae8] rounded-xl font-text-regular-medium text-white">
              Sign Up
            </Button>
            <Button
              variant="outline"
              className="px-6 py-2.5 rounded-xl border border-solid border-[#05050c26] font-text-regular-medium text-[#05050c]"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col w-full gap-20 px-16 py-20 bg-[#eff0fc]">
        <div className="flex items-center gap-8 w-full">
          <div className="flex flex-col items-start gap-6 flex-1">
            <div className="flex items-center gap-2 py-3">
              <img className="w-6 h-6" alt="Logo" src="/group-7-1.png" />
              <div className="flex flex-col items-start">
                <div className="[font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#111416] text-base leading-[22.4px]">
                  AllResume.ai
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-8">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-text-small-semi-bold text-[#05050c] text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-end gap-3 flex-1">
            <FacebookIcon className="w-6 h-6" />
            <InstagramIcon className="w-6 h-6" />
            <img className="w-6 h-6" alt="X (Twitter)" src="/icon---x-1.svg" />
            <LinkedinIcon className="w-6 h-6" />
            <YoutubeIcon className="w-6 h-6" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 w-full">
          <Separator className="w-full h-px" />
          <div className="flex items-start gap-6">
            <div className="font-text-small-normal text-[#05050c] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)]">
              © 2025 Allresume.ai. All rights reserved.
            </div>
            <a
              href="#"
              className="font-text-small-link text-[#05050c] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-text-small-link text-[#05050c] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="font-text-small-link text-[#05050c] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline"
            >
              Cookies Settings
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};