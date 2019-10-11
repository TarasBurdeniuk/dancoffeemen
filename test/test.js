const chai = require('chai');
const request = require('supertest');
const routerAdmin = require('../routes/api/admin');

const { expect } = chai;

describe('Routes api', function() {
	describe('Routes api/admin/', function() {
		this.timeout(10000);
		let task = {
			address: 'test mocha',
			country: 'testing route',
			city: 'test city',
			email: 'test email',
		};
		it('GET, load contacts from data base', function() {
			request(routerAdmin)
				.get('/contacts')
				.set('Accept', 'application/json')
				.end(function(err, res) {
					expect(res.statusCode).to.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body).to.be.empty;
					done();
				});
		});

		// it('should make a new Comment', (done) => {
		// 	request(app)
		// 		.post('/comments')
		// 		.send({
		// 			content: "first comment",
		// 			user: user._id
		// 		})
		// 		.end((err, res) => {
		// 			comment = res.body
		// 			expect(res.status).to.eq(200);
		// 			expect(res.body.content).to.eq('first comment');
		// 			done()
		// 		})
		// })
		it('POST, add or update contacts from admin panel', () => {
			request(routerAdmin)
				.post('/contacts')
				.send(task)
				.end(function(err, res) {
					task = res.body;
					expect(res.status).to.eq(200);
					expect(res.body.address).to.eq('test mo');
					done();
				});
		});
	});
});

// after(async done => {
// 	await Contact.remove({});
// 	done();
// });
