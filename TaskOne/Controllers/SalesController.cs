using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskOne;
using TaskOne.Models;

namespace TaskOne.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesController : ControllerBase
    {
        private readonly Onboarding_taskContext _context;

        public SalesController(Onboarding_taskContext context)
        {
            _context = context;
        }

        // GET: api/Sales
        [HttpGet]
        public IEnumerable<ViewModelSales> GetSales()
        {
            IEnumerable<Sales> sales =
                _context.Sales.Include(s => s.Product)
                .Include(s => s.Customer)
                .Include(s => s.Store).AsEnumerable();

            IEnumerable<ViewModelSales> viewSales = sales.Select(i => 
                new ViewModelSales() {
                    Id = i.Id,
                    ProductId=i.ProductId,
                    CustomerId = i.CustomerId,
                    StoreId = i.StoreId,
                    DateSold = i.DateSold,
                    Customer = i.Customer.Name,
                    Product =  i.Product.Name,
                    Store = i.Store.Name
                }
            ).AsEnumerable();

//ViewModelSales(int Id, int ProductId, int CustomerId, int StoreId, DateTime DateSold, string Customer, string Product, string Store) {

            return viewSales;
        }

        // GET: api/Sales/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSales([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var sales = await _context.Sales.FindAsync(id);

            if (sales == null)
            {
                return NotFound();
            }

            return Ok(sales);
        }

        // PUT: api/Sales/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSales([FromRoute] int id, [FromBody] Sales sales)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sales.Id)
            {
                return BadRequest();
            }

            _context.Entry(sales).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException e)
            {
                if (!SalesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    Console.WriteLine(e.StackTrace);
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Sales
        [HttpPost]
        public async Task<IActionResult> PostSales([FromBody] Sales sales)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Sales.Add(sales);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSales", new { id = sales.Id }, sales);
        }

        // DELETE: api/Sales/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSales([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var sales = await _context.Sales.FindAsync(id);
            if (sales == null)
            {
                return NotFound();
            }
            try
            {
                _context.Sales.Remove(sales);
                await _context.SaveChangesAsync();
            }
            catch (Exception e) {
                Console.WriteLine(e.StackTrace);
            }

            return Ok(sales);
        }

        private bool SalesExists(int id)
        {
            return _context.Sales.Any(e => e.Id == id);
        }
    }
}