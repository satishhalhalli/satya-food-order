import React from 'react';
import Userclass from './Userclass';

const About = () => {
  return (
    <div className="border border-gray-300 p-4">
      <h1 className="text-2xl font-bold">Hello Ayush</h1>
      {/* <Userclass name="Satish" /> */}
      <p className='text-xl'>
        In 2011, Sriharsha Majety and Nandan Reddy designed an e-commerce website called Bundl to facilitate courier
        service and shipping within India. Bundl was halted in 2014 and rebranded to enter the food delivery market. At
        the time, the food delivery sector was in turmoil as several notable startups, such as Foodpanda (later acquired
        by Ola Cabs), TinyOwl (later acquired by Zomato), and Ola Cafe (later closed) were struggling. Majety and Reddy
        approached Rahul Jaimini, formerly with Myntra, and founded Swiggy in August 2014.
      </p>
      <p>
        In January 2017, Swiggy started its cloud kitchen chain called "The Bowl Company". In November 2017, Swiggy
        started a kitchen incubator business called Swiggy Access, opening a network of ready-to-occupy kitchens for its
        restaurant partners. By 2019, over 1,000 Swiggy Access kitchens were operational, according to a TechCrunch
        report.
      </p>
      <p>
        In early 2019, Swiggy expanded into general product deliveries under the name Swiggy Stores, sourcing items from
        local stores. In September 2019, Swiggy launched instant pickup/dropoff service Swiggy Go, allowing customers to
        send document or parcel deliveries. In April 2020, it rebranded Swiggy Go as Swiggy Genie. During the COVID-19
        pandemic, it began doorstep delivery of alcohol, starting with the states of Jharkhand, West Bengal, and Odisha.
      </p>
      <p>
        In May 2020, Swiggy laid off 1,100 employees during the COVID-19 pandemic. The pandemic also resulted in the
        shutdown of more than three-fourths of its cloud kitchens. In August 2020, Swiggy launched its instant grocery
        delivery service called Instamart using a network of dark stores. In early 2021, the company closed Swiggy Stores
        and expanded its operations under Instamart. In 2023, it sold Swiggy Access kitchens to Kitchens@ in a share-swap
        deal.
      </p>
    </div>
  );
};

export default About;
