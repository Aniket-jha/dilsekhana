import React, { useState } from 'react';

const Pincode = ({ onPincodeValid }) => {
    const personalizedPincodes = ['400063', '400104', '400064', '400097','400101','400067','400091','400066','400092','400068']; 

    const [pincodeData, setPinCodeData] = useState("");
    const [isValid, setIsValid] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { value } = e.target;
        setPinCodeData(value);
        setIsValid(null);
        setLoading(false);
        onPincodeValid(false); // Reset validity in parent
    };
    
    const checkPincode = () => {
        if (pincodeData.length === 6) {
            setLoading(true); 
            const timer = setTimeout(() => {
                const valid = personalizedPincodes.includes(pincodeData);
                setIsValid(valid);
                onPincodeValid(valid); // Pass validity to parent
                setLoading(false);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setIsValid(null);
            onPincodeValid(false);
            setLoading(false);
        }
    };

    return (
        <div className="pincode-container">
            <input
                type="text"
                name="pincode"
                value={pincodeData}
                onChange={handleChange}
                placeholder="Enter your Pincode"
                required
                maxLength="6"
                className={`pincode-input ${isValid === false ? 'error' : ''}`}
            />
            <button onClick={checkPincode} className="pincode-button" disabled={loading}>
                Check
            </button>
            {loading && <p className="pincode-message loading">Checking pincode...</p>}
            {isValid === true && <p className="pincode-message success">Pincode is available!</p>}
            {isValid === false && <p className="pincode-message error">Pincode not available or invalid.</p>}
        </div>
    );
};

export default Pincode;
