const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          {{#each categories}}
            <li>{{ this }}</li>
          {{/each}}
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {
      // arrange: set up values
      const categories = [];
      // act: single line of code for single action
      const result = mergeCategories(template, categories, 'li');
      // assert: assert as much as from that act
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
          {{#each categories}}
            <option>{{ this }}</option>
          {{/each}}
        </select>
      </div>
    `;

    it("should return no <option>s for no categories", () => {
      const category = [];
      const result = mergeCategories(template, category, 'option');
      expect(result).to.include('<div>');
      expect(result).to.include('</div>');
      expect(result).to.include('<select>');
      expect(result).to.include('</select>');
      expect(result).to.not.include('<!-- Content here -->');
      expect(result).to.not.include('<option>');
      expect(result).to.not.include('</option>');
    });

    it("should return a single <option> for one category", () => {
      const category = ['Friday'];
      const result = mergeCategories(template, category, 'option');
      expect(result).to.include('<div>');
      expect(result).to.include('</div>');
      expect(result).to.include('<select>');
      expect(result).to.include('</select>');
      expect(result).to.not.include('<!-- Content here -->');
      expect(result).to.include('<option>Friday</option>');
    });

    it("should return an <option> for each category", () => {
      const category = ['Friday', 'Saturday', 'Sunday'];
      const result = mergeCategories(template, category, 'option');
      expect(result).to.include('<div>');
      expect(result).to.include('</div>');
      expect(result).to.include('<select>');
      expect(result).to.include('</select>');
      expect(result).to.not.include('<!-- Content here -->');
      expect(result).to.include('<option>Friday</option>');
      expect(result).to.include('<option>Saturday</option>');
      expect(result).to.include('<option>Sunday</option>');
    });
  });
});
