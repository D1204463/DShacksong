import React, { useState } from 'react';
import { recommendBooks } from '../services/api';

const RecommendBooks = () => {
    const [userId, setUserId] = useState('');
    const [recommendations, setRecommendations] = useState([]);

    const handleRecommend = async () => {
        try {
            const response = await recommendBooks(userId);
            setRecommendations(response.data);
        } catch (error) {
            alert('Failed to get recommendations');
        }
    };

    return (
        <div>
            <h2>Recommend Books</h2>
            <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={handleRecommend}>Get Recommendations</button>
            <ul>
                {recommendations.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecommendBooks;
