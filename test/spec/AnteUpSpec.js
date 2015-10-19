describe("high card", function(){
  it("with a seven", function(){
    expect( AnteUp.read(["2H", "3S", "7C", "4H", "5D"]) ).toBe( "high card" );
  });

  it("with a ten", function(){
    expect( AnteUp.read(["10H", "3S", "7C", "4H", "5D"]) ).toBe( "high card" );
  });

  it("with an ace", function(){
    expect( AnteUp.read(["10H", "3S", "AC", "4H", "5D"]) ).toBe( "high card" );
  });
});

describe("one pair", function(){
  it("of twos", function(){
    expect( AnteUp.read(["2H", "2D", "3S", "6C", "KH"]) ).toBe( "one pair" );
  });

  it("of jacks", function(){
    expect( AnteUp.read(["JH", "2D", "3S", "JC", "KH"]) ).toBe( "one pair" );
  });

  it("of aces", function(){
    expect( AnteUp.read(["2H", "3D", "AS", "AC", "KH"]) ).toBe( "one pair" );
  });
});

describe( "two pair", function(){
  it("with twos and threes", function(){
    expect( AnteUp.read(["2H", "2D", "3S", "AC", "3H"]) ).toBe( "two pair" );
  });

  it( "with fours and sevens", function(){
    expect( AnteUp.read(["7H", "4D", "AS", "7C", "4H"]) ).toBe( "two pair" );
  });

  it( "with aces and queens", function(){
    expect( AnteUp.read(["QH", "2D", "AS", "AC", "QD"]) ).toBe( "two pair" );
  });
});

describe( "three of a kind", function(){
  it( "with twos", function(){
    expect( AnteUp.read(["2H", "2D", "3S", "AC", "2H"]) ).toBe( "three of a kind" );
  });

  it( "with eights", function(){
    expect( AnteUp.read(["2H", "8D", "3S", "8C", "8H"]) ).toBe( "three of a kind" );
  });

  it( "with kings", function(){
    expect( AnteUp.read(["2H", "KD", "KS", "AC", "KH"]) ).toBe( "three of a kind" );
  });
});

describe( "straight", function(){
  it( "with two to six", function(){
    expect( AnteUp.read(["2H", "3D", "6S", "4C", "5H"]) ).toBe( "straight" );
  })

  it( "with six to ten", function(){
    expect( AnteUp.read(["10H", "8D", "6S", "9C", "7H"]) ).toBe( "straight" );
  })

  it( "with ten to ace", function(){
    expect( AnteUp.read(["QH", "10D", "JS", "AC", "KH"]) ).toBe( "straight" );
  })
});

describe( "flush", function(){
  it( "with hearts", function(){
    expect( AnteUp.read(["QH", "2H", "JH", "5H", "4H"]) ).toBe( "flush" );
  });

  it( "with diamonds", function(){
    expect( AnteUp.read(["QD", "2D", "JD", "5D", "4D"]) ).toBe( "flush" );
  });
});

describe( "full house", function(){
  it( "with twos and tens", function(){
    expect( AnteUp.read(["10D", "2D", "2H", "10C", "10S"]) ).toBe( "full house" );
  });

  it( "with fours and aces", function(){
    expect( AnteUp.read(["4D", "AD", "AH", "AC", "4S"]) ).toBe( "full house" );
  });

  it( "with sixes and jacks", function(){
    expect( AnteUp.read(["6D", "JD", "JH", "JC", "6S"]) ).toBe( "full house" );
  });
});

describe( "four of a kind", function(){
  it( "with twos", function(){
    expect( AnteUp.read(["2D", "JD", "2H", "2C", "2S"]) ).toBe( "four of a kind" );
  });

  it( "with nines", function(){
    expect( AnteUp.read(["8S", "9D", "9H", "9S", "9C"]) ).toBe( "four of a kind" );
  });

  it( "with tens", function(){
    expect( AnteUp.read(["10S", "10D", "10H", "9S", "10C"]) ).toBe( "four of a kind" );
  });

  it( "with aces", function(){
    expect( AnteUp.read(["8S", "AD", "AH", "AS", "AC"]) ).toBe( "four of a kind" );
  });
});

describe( "straight flush", function(){
  it( "with two to six of hearts", function(){
    expect(AnteUp.read(["6H", "3H", "2H", "4H", "5H"]) ).toBe( "straight flush" );
  });

  it( "with six to ten of clubs", function(){
    expect(AnteUp.read(["8C", "6C", "10C", "9C", "7C"]) ).toBe( "straight flush" );
  });

  it( "with royal flush of spades", function(){
    expect(AnteUp.read(["KS", "AS", "10S", "QS", "JS"]) ).toBe( "straight flush" );
  });
});
