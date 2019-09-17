using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace TaskOne.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly Onboarding_taskContext _context;


        public ProductsController(Onboarding_taskContext context) {
            this._context = context;
        }

        //GET : api/Products
        [HttpGet]
        public IEnumerable<Product> GetProducts() {
            return _context.Product;
        }

        //GET : api/Products/{id}
        [HttpGet("{id}")]  //  '/' is not needed, cos it will ignore the path on controller
        public IActionResult GetProductById([FromRoute] int id) {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            Product product = _context.Product.Find(id);
            if (product == null)
                return NotFound();
            else
                return Ok(product);

        }

        //PUT : api/Products/{id}    
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct([FromRoute] int id, [FromBody] Product product) {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (id != product.Id)
            {
                return BadRequest();
            }
            _context.Entry(product).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        //POST : api/Products
        [HttpPost]
        public async Task<IActionResult> PostProduct([FromBody] Product product) {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            _context.Product.Add(product);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetProducts", new { id = product.Id }, product);
            
        }

   


        //DELETE : api/Products/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct([FromRoute] int id) {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else {
                Product productToRemove = await _context.Product.FindAsync(id);
                if (productToRemove == null)
                    return NotFound();

                _context.Product.Remove(productToRemove);
                await _context.SaveChangesAsync();

                return Ok(productToRemove);
            }
        }


    }
}