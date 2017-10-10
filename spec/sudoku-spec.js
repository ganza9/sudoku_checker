describe('Sudoku', function(){

  it('should test that each row and each colun have all numbers from 1 to 9 with no repeats', function(){

    expect(row1).toEqual(1, 2, 3, 4, 5, 6, 7, 8, 9)
    expect(colum1).toEqual(1, 2, 3, 4, 5, 6, 7, 8, 9)
  });
});
