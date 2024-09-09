import React from "react";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <div className="side-bar">
            {categories.map((category) => (
                <button className="category-btn"
                  key={category.name }
                  onClick={() => setSelectedCategory(category.name)}
                  style={{
                    background: category.name == selectedCategory && 'red', 
                  }}
                >
                    <span className='side-logo'
                      style={{color: category.name == selectedCategory && 'white'}}
                    >{ category.icon }</span>
                    <span className='side-text'>{category.name}</span>
                </button>
            ))}
        </div>
    )
}

export default SideBar;