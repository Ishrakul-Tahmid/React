import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to gym facilities",
            "Limited workout equipment",
            "Daytime gym access"
          ],
          "price": 25.00
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "features": [
            "Access to gym facilities",
            "Full range of workout equipment",
            "Locker room access"
          ],
          "price": 45.00
        },
        {
          "id": 3,
          "name": "Platinum Membership",
          "features": [
            "Access to gym facilities",
            "Full range of workout equipment",
            "24/7 gym access",
            "Personal training sessions",
            "Access to sauna",
            "Access to locker room",
            "Towel service"
          ],
          "price": 80.00
        },
        {
          "id": 4,
          "name": "Premium Plus Membership",
          "features": [
            "All Platinum features",
            "Nutrition consulting",
            "Monthly massage session",
            "Priority class booking"
          ],
          "price": 110.00
        },
        {
          "id": 5,
          "name": "Student Membership",
          "features": [
            "Access to gym facilities",
            "Off-peak hours only",
            "Discounted personal training"
          ],
          "price": 20.00
        }
      ]
      
    return (
        <div className="mt-10">
            <h2 className="text-5xl">Best prices in the country</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;