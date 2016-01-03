describe('calculator', function (){
    it('should add two numbers', function (){
        expect(add(1,2)).toBe(3);
        expect(add(10,22)).toBe(32);
    });

    it('should convert string to number', function () {
        expect(add('1', '12')).toBe(13);
    });
});