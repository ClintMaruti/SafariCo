"use client";
import { ContactUsSection } from "../components/ContactUsSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";

export default function BookingTermsAndConditions() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <HeroSection
        title="Conservation & Sustainability"
        imageUrl="/images/Game-Drive-Vehicle.jpg"
        description="Please find below information about booking your SkySafari Adventure
Should you have any specific questions that are not addressed in the details below, please don’t hesitate to contact us"
      />

      <section className="pt-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#c6bfaf] mb-6">
            Provisional Bookings
          </h2>
          <p className=" text-gray-600 leading-8">
            Provisional bookings will be held as indicated here. In the event
            that SkySafari receives a reservation request that requires the
            booking being held by the Agent on a provisional basis, SkySafari
            reserves the right to request the Agent to either release the
            booking or make a 20% deposit within 48 hours against the space held
            in order to secure it.
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <table className="container mx-auto px-4 md:px-8 max-w-4xl border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="px-6 py-3 text-sm font-semibold">
                No. of Days Prior to Arrival
              </th>
              <th className="px-6 py-3 text-sm font-semibold">Held for:</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 text-gray-700">
                More than 90 days from date of arrival
              </td>
              <td className="px-6 py-4 font-medium">14 Days</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 text-gray-700">
                Between 89 and 31 days from date of arrival
              </td>
              <td className="px-6 py-4 font-medium">7 Days</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 text-gray-700">
                Less than 30 days from date of arrival
              </td>
              <td className="px-6 py-4 font-medium">48 Days</td>
            </tr>
          </tbody>
        </table>
        <p className=" text-gray-600 leading-8 container mx-auto px-4 md:px-8 max-w-4xl pt-4">
          Bookings held provisionally will be released automatically on expiry.
          Please note that in times of high demand SkySafari reserves the right
          to shorten the provisional expiry period.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#c6bfaf] mb-8 ">
            Confirmation of Booking
          </h2>

          <p className=" text-gray-700 leading-relaxed mb-6">
            A booking will only be confirmed upon receipt of deposit payment or
            a booking voucher from the Agent. All booking vouchers are to be
            sent to our reservation consultants by email using an official email
            address. Booking vouchers are only accepted in lieu of a deposit for
            Agents that have approved credit facilities from SkySafari. Please
            ensure the booking voucher contains the following information:
          </p>

          <ul className="bg-white p-6 rounded-lg shadow-md border border-gray-200 space-y-4">
            <li className="flex items-start">
              <span className="text-[#c6bfaf] font-semibold mr-2">1.</span>
              <span className="text-gray-700">
                SkySafari itinerary you wish to book
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#c6bfaf] font-semibold mr-2">2.</span>
              <span className="text-gray-700">
                Date and time of arrival and departure in and out of
                Tanzania/Kenya
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#c6bfaf] font-semibold mr-2">3.</span>
              <span className="text-gray-700">
                International flight numbers and airline details
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#c6bfaf] font-semibold mr-2">4.</span>
              <span className="text-gray-700">
                Number of pax, rooming list, and configuration (# of doubles,
                twins, singles, etc.)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#c6bfaf] font-semibold mr-2">5.</span>
              <span className="text-gray-700">
                Names of clients, their ages, and especially any children in the
                group
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#c6bfaf] font-semibold mr-2">6.</span>
              <span className="text-gray-700">Any special requirements</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#c6bfaf] font-semibold mr-2">7.</span>
              <span className="text-gray-700">Nationality of clients</span>
            </li>
          </ul>

          <p className=" text-gray-700 leading-relaxed mt-6">
            Once a voucher confirming the booking has been received by our
            reservations department, an email will be sent back to the Agent
            acknowledging receipt and confirming the booking. If the Agent does
            not receive an email confirming the receipt of the Booking Voucher,
            they should contact our reservations department. Any further
            amendments or cancellations should follow the same procedure.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#c6bfaf] mb-6">
            Payment & Deposit Policy
          </h2>

          <p className=" text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            Bookings must be secured by a{" "}
            <span className="font-semibold">20% deposit</span> within{" "}
            <span className="font-semibold">48 hours</span> upon confirmation,
            with the balance payable{" "}
            <span className="font-semibold">45 days prior to arrival</span>.
            Bookings not secured by the appropriate deposit may be released
            without prior notification.
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <h2 className="container mx-auto px-4 md:px-8 max-w-4xl text-4xl font-bold text-[#c6bfaf] mb-6">
          Release Periods & Cancellation Policies for Confirmed Bookings
        </h2>
        <table className="container mx-auto px-4 md:px-8 max-w-4xl border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="px-6 py-3 text-sm font-semibold">
                Days to Arrival
              </th>
              <th className="px-6 py-3 text-sm font-semibold">Charge</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 text-gray-700">Upon confirmation</td>
              <td className="px-6 py-4 font-medium">20%</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 text-gray-700">
                Between 60 & 31 days prior to arrival in Green & Mid-season
              </td>
              <td className="px-6 py-4 font-medium">50%</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 text-gray-700">
                Between 90 & 31 days prior to arrival in High season
              </td>
              <td className="px-6 py-4 font-medium">50%</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 text-gray-700">
                Less than 30 days from date of arrival
              </td>
              <td className="px-6 py-4 font-medium">
                100% cancellation charges
              </td>
            </tr>
          </tbody>
        </table>
        <p className=" text-gray-600 leading-8 container mx-auto px-4 md:px-8 max-w-4xl pt-4">
          These clauses are applicable to group bookings. Bookings of 5 rooms or
          more will be considered GROUP BOOKINGS.
        </p>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#c6bfaf] mb-6">
            Alteration of confirmed bookings
          </h2>

          <p className=" text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            Once a booking is confirmed the value of that booking cannot be
            reduced by amending dates, pax numbers, package options or meal
            plans without the relevant cancellation policy applying.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#c6bfaf] mb-6">
            Amendment in rates
          </h2>

          <p className=" text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            SkySafari rates are subject to change without prior notification.
            Rates are also subject to change in the event of changes in
            government-imposed taxes, fuel price, hotel charges, tourism levies
            and or the introduction of national, regional or local taxes or
            levies of whatever nature. In the event of a change in rates by
            Third Party Suppliers and/or a change in Government Taxes or Levies
            affecting the rates or terms mentioned herein, SkySafari reserves
            the right to pass on any increases to the Agent.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#c6bfaf] mb-6">Refunds</h2>

          <p className=" text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            Whilst the company uses its best endeavours to ensure that all
            anticipated accommodation and excursion is available as planned,
            there shall be no claim whatsoever against the company for a refund
            either in whole or a part, if any accommodation or excursion is
            unavailable, or the guest was unable to use any aspect of the
            SkySafari service.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#c6bfaf] mb-6">
            Levies & Taxes
          </h2>

          <p className=" text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            Rates are inclusive of current taxes at time of publication, except
            for Zanzibar Infrastructure Levy and Park and Conservancy Fees.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#c6bfaf] mb-6">
            SkySafari Aircraft
          </h2>
          <p className=" text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            From time-to-time and in order to ensure and continue to maintain
            the highest levels of safety and standards, the Executive Cessna
            Grand Caravan used for SkySafari flights will be required to
            undertake scheduled and unscheduled maintenance works. In both
            cases, SkySafari will ensure an alternate aircraft is available from
            a third party, to undertake any and all flight commitments. In the
            event that the Executive Cessna Grand Caravan aircraft used for
            SkySafari flights is not available due to any reason, including but
            not limited to, scheduling reasons, SkySafari will ensure an
            alternate aircraft is available from a third party, to undertake any
            and all flight commitments.
            <br />
            In such events, SkySafari cannot guarantee the same interior layout
            to that of the Executive Cessna Grand Caravan regularly used by
            SkySafari and in such cases the affected Guest may be due, at the
            sole discretion of SkySafari management, compensation not exceeding
            US$50 per sector per Guest and only where a third-party aircraft was
            used on any such sector.
            <br />
            The aircraft used by SkySafari is configured to carry eight
            passengers in eight comfortable passenger seats, including two,
            non-reclining divan-type seats at the rear of the cabin. On specific
            requests, and subject to approval by the flight service provider,
            SkySafari will accept and book a ninth passenger who will be seated
            in the co-pilot seat. Seating allocation on SkySafari flights is
            free seating and the Pilot in Command has the authority to determine
            the seating arrangement of any flight due to safety considerations.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#c6bfaf] mb-6">
            Travel & Health Insurance
          </h2>
          <p className=" text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            Agents must ensure that their guests have adequate insurance cover
            for their intended itinerary and any additional activities
            including, medical, evacuation, repatriation, loss to personal
            belongings and trip cancellation. Medical Insurance should also
            include comprehensive evacuation and repatriation from East Africa
            in the unlikely event that it is required by the guest.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#c6bfaf] mb-6">
            Force Majeure
          </h2>
          <p className=" text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            SkySafari or Agent is not liable for delay or failure to perform any
            obligation hereunder in so far as the performance of such obligation
            is prevented by a force majeure event. Each party shall notify the
            other party of the occurrence of such force majeure event and shall
            use all reasonable endeavours to continue to perform its obligations
            hereunder for the duration of such force majeure event. However, if
            any such force majeure event prevents a party from performing all
            its obligations hereunder for more than one (1) month, the other
            party may terminate this Agreement by notice in writing. For the
            purposes of this Agreement, a force majeure event means any event
            which is beyond the reasonable control of the party liable to affect
            performance, and shall include but not be limited to acts of God,
            riots, acts of war, and acts of terrorism, Industrial dispute,
            epidemics, fire, power failures and natural disasters. For the
            avoidance of doubt, force majeure does not include strikes or other
            employment disputes of either party’s personnel or such party’s
            subcontractors’ personnel.
          </p>
        </div>
      </section>
      <ContactUsSection />
      <Footer />
    </main>
  );
}
