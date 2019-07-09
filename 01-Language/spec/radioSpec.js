describe('a radio', () => {
	it('broadcasts an event', () => {

		//Arrange
		let evt1 = 'event-1', 
			evt2 = 'event-2', 
			data1 = 'data-1', 
			data2='data-2', 
			subFn1 = jasmine.createSpy('subFn1'),
			subFn2 = jasmine.createSpy('subFn2'),

			sut = radio(evt1);

		//Act
			sut.subscribe(subFn1);
			sut.broadcast(data1);

		//Assert
			expect(subFn1).toHaveBeenCalledWith(data1);
	})
})