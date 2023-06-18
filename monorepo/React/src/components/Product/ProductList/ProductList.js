import "../../../styles/components/products.css";
import ProductItem from "../ProductItem/ProductItem";
import painReliefCream from "../../../assets/images/pain_cream.jpg";
import thermometer from "../../../assets/images/thermometer.jpg";
import bloodPressureMonitor from "../../../assets/images/blood_pressure_monitor.jpg";
import firstAidKit from "../../../assets/images/first_aid_kit.jpg";
import prescriptionMedications from "../../../assets/images/prescription_medications.jpeg";
import handSanitizer from "../../../assets/images/hand_sanitizer.jpg";
import sunglasses from "../../../assets/images/sunglasses.jpg";
import surgicalMasks from "../../../assets/images/surgical_mask.jpg";
import vitaminsAndSupplements from "../../../assets/images/vitamins_supplements.jpg";
import medicalGloves from "../../../assets/images/medical_gloves.jpg";
import coldAndFlu from "../../../assets/images/cold_and_flu.jpg";

const dummyData = [
  {
    id: 1,
    title: "Pain Relief Cream",
    img: painReliefCream
  },
  {
    id: 2,
    title: "Thermometer",
    img: thermometer
  },
  {
    id: 3,
    title: "Blood Pressure Monitor",
    img: bloodPressureMonitor
  },
  {
    id: 4,
    title: "First Aid Kit",
    img: firstAidKit
  },
  {
    id: 5,
    title: "Prescription Medications",
    img: prescriptionMedications
  },
  {
    id: 6,
    title: "Hand Sanitizer",
    img: handSanitizer
  },
  {
    id: 7,
    title: "Sunglasses",
     img: sunglasses
  },
  {
    id: 8,
    title: "Surgical Masks",
    img: surgicalMasks
  },
  {
    id: 9,
    title: "Vitamins and Supplements",
    img: vitaminsAndSupplements
  },
  {
    id: 10,
    title: "Medical Gloves",
    img: medicalGloves
  },
  {
    id: 11,
    title: "Cold and Flu Medicine",
    img: coldAndFlu
  },
];

const ProductList = (props) => {
  return (
    <section className="ProductList container">
      {dummyData.map((product) => {
        return (
          <ProductItem
            key={product.id}
            title={product.title}
            img={product.img}
            handleOptionSelect={props.handleOptionSelect}
          />
        );
      })}
    </section>
  );
};

export default ProductList;
