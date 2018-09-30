import { FilterPipe } from './filter.pipe';
import { Shirt } from './shirt';

const shirts: Shirt[] = [
  {
    id: 1,
    price: 10,
    picture: '',
    colour: 'Black',
    size: 'L',
    name: 'Cool Shirt',
    quantity: 2
  }, {
    id: 2,
    price: 5,
    picture: '',
    colour: 'White',
    size: 'S',
    name: 'A Different Cool Shirt',
    quantity: 2
  }, {
    id: 3,
    price: 8,
    picture: '',
    colour: 'Black',
    size: 'M',
    name: 'Hogwarts',
    quantity: 2
  }, {
    id: 4,
    price: 10,
    picture: '',
    colour: 'Blue',
    size: 'L',
    name: 'The Beatles',
    quantity: 4
  }
];

describe('FilterPipe', () => {
  it('should return an empty array when list of shirts is undefined', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();

    expect(pipe.transform(undefined, 'S', 'Black').length).toBe(0);
  });

  it('should filter shirts by size', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();

    expect(pipe.transform(shirts, 'S', '').length).toBe(1);
    expect(pipe.transform(shirts, 'L', '').length).toBe(2);
  });

  it('should filter shirts by colour', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();

    expect(pipe.transform(shirts, '', 'Black').length).toBe(2);
    expect(pipe.transform(shirts, '', 'White').length).toBe(1);
  });

  it('should filter shirts by size and colour', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();

    expect(pipe.transform(shirts, 'L', 'Blue').length).toBe(1);
  });
});
