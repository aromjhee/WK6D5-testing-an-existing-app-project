const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {
      // arrange: set up values
      const categories = [];
      // act: single line of code for single action
      const result = mergeCategories(template, categories, 'li');
      //assert; assert as much as from that act
      expect(result).to.include('<div>');
      expect(result).to.include('</div>');
      expect(result).to.include('<ul>');
      expect(result).to.include('</ul>');
      expect(result).to.not.include('<li>');
      expect(result).to.not.include('</li>');
      expect(result).to.not.include('<!-- Content here -->');
    });

    it("should return a single <li> for one category", () => {
      const categories = ['Difficult'];
      const result = mergeCategories(template, categories, 'li');
      expect(result).to.include('<div>');
      expect(result).to.include('</div>');
      expect(result).to.include('<ul>');
      expect(result).to.include('</ul>');
      expect(result).to.include('<li>Difficult</li>');
      expect(result).to.not.include('<!-- Content here -->');
    });

    it("should return an <li> for each category", () => {
      const categories = ['Difficult', 'Music', 'Chill'];
      const result = mergeCategories(template, categories, 'li');
      expect(result).to.include('<div>');
      expect(result).to.include('</div>');
      expect(result).to.include('<ul>');
      expect(result).to.include('</ul>');
      expect(result).to.include('<li>Difficult</li>');
      expect(result).to.include('<li>Music</li>');
      expect(result).to.include('<li>Chill</li>');
      expect(result).to.not.include('<!-- Content here -->');
    });
  });

  context("using <option> tags", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no <option>s for no categories", () => {
      expect.fail('please write this test');
    });

    it("should return a single <option> for one category", () => {
      expect.fail('please write this test');
    });

    it("should return an <option> for each category", () => {
      expect.fail('please write this test');
    });
  });
});
