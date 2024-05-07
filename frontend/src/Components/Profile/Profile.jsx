import React from "react";

function Profile() {
  return (
    <div className="profile-screen w-75">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img
          src="data:image/jpeg;base64,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"
          className="w-100 "
          style={{ height: "300px" }}
        />
        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWMAAACOCAMAAADTsZk7AAABVlBMVEX///81GlV0b6c1VJO+Jmo0mLP1fyonAEwzGFR+xF//zS4tDFDv7fE2GFgcAEYjAEqnoLF2Z4rd2uEwEVG7tsLKxNJfTHgrBk4vEFF2aYj6+fuHepcfAEgYAEQqAE8vUJHSzdigl6y0rb7b1+BlVXvq5+1pZKH0dQB0wFEiSI2akKdrXICAdJFSPmyup7mkm7BDLWA/JV16davnusy5AFz/99/P6MRorsP3+/Ww1N/Ey92OnL57i7ITQIqPhJ5nYaC/vdVNOGehncLXiKf6w6L3m2D1hTT/yg/k8t7v+OyMynGf0oq636vV682s2JrF3+eKv89AnrejzNmTzXpxssbe7fKptM5kealrfqxGYpwAADt0h7GwrcuMiLaQjbj46PDhqL7PZpLITYHJU4YAADfuzdrQdZj94tH95dX5u5f2kU34pnT/56X/1FH/12X/78P/8tD/4YsfqREhAAAQbElEQVR4nO1d/3/TNhO2S8ECu3EbJ3Hq2qmb1P2SpE1SGBQKoQVKN7a9jL0bvGwrG2yDjfGyvf//L2/cpI1OOil2muI4nzw/1op0enQ63Z3OrqJMweLzmzdvfpG0EBONm082Qnz5edKCTC6+2rjaw5TkC8LXZxRfvbqbtDATij7DVzf+lbQwk4nPN2iS+edPv7l167tvnjqfXrLJwU3AMWssvr91uYtn3yci3WTgK8Ax48A9vdzH7WTkmwTI9Jim+PLlpwlJmH58QVF89Ql45DwDHD+b2uRh8WVfkTe+Bk++vQzxbUISph+7fYq/hE9uMRzfSkbAScAXTzZQip3LLKbGYmjsfvVkY+Pqv28yf+Y5nvpv58HuLh9GTzm+eDBuxdjaCiMIDCNpIYbFdwzF3yUtEIZsvZXxSq2FfNKCDIenDMfjGIQ0NI2oqkp0d2E8d9kgQEUeR9dtKRMyHIJoB6kkGVrkMZxC2VP70BaTFmcoOP0wZBwTb45OKI5Vz09aoOFwu6vKz74dQy1WyiZNsaovJC3QsPj+9u3bY6jDIVaLgGNCkhZoAqECU6GqpWzSEo0WwfO7L17+Z+9Okt4/gRwTrZKgMCNH9sfNzeUQm8t7ybHcZDi2g8REGT32NpcvnWJz+U5SYizZkONWUoJcAH7cvETj3vOE5PA9wLG2kpAcF4A9SHGH5KQ0eYt2LIiZ2swQhzssxZcuLSc0u6zbt8jEKycjxEXg5TLP8V5CsvjFU5NsufMJyXABQNQ4OUVWgppXsizLzjRTmtxEcZdX445zkZhvofjtwtbWUm4cY/2h8RKhODljMZnA1PjS8t2kxZokGDjHL5KWa6Iw1eOLx9QeXzz2xsyvmERU7mGKPDlh7FjgBa/Im+kyFUF+vr5Qq7erZf8cupHN5+ZXtnP5QRcDldxKZ7TawmK7nI863B1ekZfZCMBZmachjMH8SK0C0Nm8f/bAaIAHOSAC/NFZatmYP8iYmq0XbU0zTVety8OXHDoRp7you6aphV2YZq0s6iK7Uug8D0cr6nqpM1yrnhM0hXjO5d34+4emq/Vhzom6KlDNzKZI0qpHdaZ5fcWp/EA/yNToHxklk3r2Q4+dYEkzLSq1T4huanXJ/clChh56qdt1VTP1/iUMKZqlBvJTY7vgaRa4RyDEdu2lKNc1TP54E8kfVzW6a1ewnwKQAM74gvGaFtXKKvQfZDP07+G9tDFHz8494dip2hpzBxhO3DZroqGVRZ1qabfDP/lNk+1E46/EjWrLtFQERJMM18fevb5NXkbvQSouEAFbZoVdCXsJb1UBvNB9xeQ4y5PTm7ZuLgk2Ec/xtstTZ3J2bltFVrM/3MLga7HKi3u9+7x7e2hrZwvo3hbezRwUI4O3AitBStR48TjOe6hedaHN+ejgHMfbGWQnsMYwOHCFDHdZ9gRqB6bw/McXL1/cvSO0oYAYGzUWeViDopr4eQCWq0iZingc5wdMG8/xsxz72FbQqvBHZbPIN2KGy9TO7e9CWcztgfKH/K1irbKgJ41Oxcfg2PfFe7c3azTLz3LcxPaCB1WoLV/N05k0z10OAi7m9RrSwmBrUIiG2Z0VsCNcukl0jrVyS2IoenCR/Qs5rq6YyO/oYzj8icDqsyja560HaZdoakrIxihz8pqYJkkse3SOiRVh3pi5ABzrdR37nQl+VsOWQTDeOUn2wfxNxNitckarWOBbQR6h0YnOcUTwpZ/Qns2hVNm0Ai1Fpjj0rM9pLkrAWPAOZMBvKWLyCwtNRQbsh5FzbLXYM5w9MxDodOFzI5ItPkWxeb6Drw2qeEzOAQHk9aC1uW5atMxFaNeH5JgQq2gR9DFXKB6BY5dyjlG342REgg5Ywg6q6IDGwuX8shYyJuH0KAtCQcbkDMOxVTJbB4XVQnPO1BFP12WiCSHH5JQ0QuUAHGTQTsRRUg+2mnOahhwK2DkbHQ5wG3RWQeASnCLDBkwN6GfDrRWfY2IetLvJNifILeq8P2dtwVVGOe5E3xm91VRLrmaBvdfm96ZWqpWzhtMZr1ItuHxv7rkKIUHJH9GYp3WbG05FlgJ4FawLGJtjswWybEY7w527LtwqCMfE1JdygWE4huE3CplM/wzJcuedblZptcjWuCgRdWsjIw9yFkxI75Rww+VBNcqWQB+MdxKTY8vkNmZQYA0oU/3Jc6zrQIoKFTgtsI1dLpjzW4yqc9YpFhwQhth18JB3jlEaoamYYySOx7Gl+oiUSyzJ0FxxHGurwnxzhaXPRCpJHdZ/xqNb5keVn453do4f7HOGBZgDAtPDvHPcGxG6yKAZt61icSwqAW+4sB30XViONcnWZswf0XANbUOSieuLuzyBs7+ztjYTYm3tFTMJkPMhJt1VYAs8K5BXUwKgGVzOKBbHwvQ0EzXAg5Xh2DoQO7QO4za4aJKmgwWo74jDClDZ6RLcxdpPcFDgWYCugHMMMgmgUrsBpu9yjl0MjrFIs4dVyCNYSoZjPlHcRxluCDF1zgGYMbHFfXawTzMcknwMaABnAPCKaHfBWlVBM3r2UlMRh2OZ1Qvg+Qt8G8ixdSAhAzYlqviekHkBgHNYaezfn2GxQz/PgZWlbpyAc2zmaC+PjqcD4OnwYUyMnJBMARm3FigDJE50oXMCaP7wdG4PBXAayV6yqKxxFM+sPaAaOB7Bu6InRUoOoJzaY9vAoGucYkTnWHQT00UAdZ4+EiDHMj+rApSTlGQDwgBMJtwxT3GHZPp6DxqL/kaj46vQqaO9PDJ3xiUMQKDzFyJG/lheZQ8tMn3QQ449SZ0A9EZt6UHmtOAmEzZkjXEPx1QTaCy8APtzuIvBEXimLAbQDESHonPsySNWsGFUjdrmjK2Q9AFzXAMiCxgDmyLpnB2U4pk1n5poCVUm+iizQr8Z5DnPuIKmosV7TZE5HvTqXlYTeUCAY+5ulAbYs0SXF/bnwKICt5YGZo1PQFvkRehZdP8Y0DPqTohm/SyeBicDYiqic1wckBSAX2mwRRxL3YoCvK+RcxzAmweR0gtMBXQtyjAM6e4JOkDuuRGgXe9IhnEKJkdkjuXWUWGqEOiwH3KM3NOcQZq9YjF4bid4IKB45j61hEER9FXmpOnpNrg/7f0Nrg+XWVZicDzgyGNveIfiWJad4WCAQ09Q9KAor0Qcr9EWvEbv924gUKGN76kbCayZduJJ18CVMCb06DhujZhjLkfLAN7Jn5NjqIwniTPg8Xu9kwzkNk5qQgywndBzOjrHg2yFPmJbYQ1IpjGJmHPZCiXQ2QUDWYw+LzSjVviNK7g6qEsf/cyTkRNKCdLU4jNP1g2I+4mwCBWTPP6ZNwO6B8dtuIVA6r6vnkC7wygAmgq03jC67yZzbBW2KowurYrOcT2ay9vFPNRjUZ2F0Hd7BZpts8aCtrzUSQYuRzuUGmDaeGIyegySkVeLwIQFnaKLzvG2sA8ENfjFApHSC2MQWCvLBmsgh0HbSdqeEZ0xFSoqQoxYuop2gI0NFyQ6xzCskHvkDliPzmxF+AlX5B1mUYD8drvMO8ddAIV382ClBWdWjLwb5vqdAVZFEF2UE5JyHDAJS5mxgLG75KNpBq7G+0wzYHpI84B3hHsy0nG3BShWBdcxMfLH0lQjvPgCUkXnmCkYsWXeG0xYy+zKHUyRj9lWMAkMqmVgOhYccmDzWoJvacbgmKjiSyKYuYLnawyOQRWl5CBj3x+QJ6weICTzUykIq1JhLWxOWI0ncm/j3DWJP8fJFt6J75rkHDNVOZbQfWNq2+W9IiYZWZIGUth2Aub+x8Cqs0JgpYYniHVn6gqOPYepTCYWzU0MjplrOlUTxCEwvzDQBVH2Z8Cd6StsQ2ZFHLOXR3jpkCTdFa++IoPuhqDAjAqj9hgcK2wBuIl+kznbZD5hyVaNcDAerJ2yvHYseGtaYCy4wMB30XZixytmnZCJnN+VFlukAguv43DMDalt8fTlSwwbA+P8sOf9V2v3788cP/BFLaq4IvOdC0othQFE3Ho3rcXsHKfNvQjGGLA4HPMlhUW7AVU54F5kAJ7i8Mjir7vw1GElybJLjNg1hSRTyPVVK2jo/IBMRBmLY4OrzCFmcSV7SrPj1zNcPa4pj44iA30ZCLmNhbcDpxDHaEPUHxddfbGRr2T9xtKqi6y9zdiTWBwr27y1I5q7Va/m/HJ7seXy1VEj+4AlaiywqgK0Cs4TvjQxVB090TXTLLmajb2GA0vBFPZmfRDHygEyAWLZmumaGlJSPsKPj8PSA8FsQmDVnJLqg+HfBxE946pnY3KcxUt+hRiVpVD4r0GrguIo9KAS1+aM/J0bviozJscdLYkzrMiFHgaIscDvV/iSamKK368aNcdFPnMUl2OlKnBA0fEQ325o8MYCqawKwb5CLZ9XDI4Hv2XaaWPx5ivemReiHpnkIvZm6NBwOM8CK5dQ2Nr7ELIyvhj1bquigmeqjY744fE55ivzBShJapmHAeediyqu2YZE9iH/6Bybufag9z+Lc1ioMwTHSgP/OAgDc3XEH7piw2ShW1hhXGRpwWUcjpW6nGTtAI23huFY8VVRiqZPgDc6j6IH1gaI4wom+SatjIjFsVL3xHuYeIt4JnIojhVjwZO+BE80PcLbTD//8vrNm1/fXo/6TVz4fX4ifvMPXsPI89fxOFbKSOjcFcdkExlniO1X9OBvmcK3gDsBdgQl/vn1jRuzIW7ceBjNqvjwRlHsFxrAqshrs2NyrAR1E4kRLFOtClVlWI47LlJN0zC7rLvNlQic/dIluMvy7O+RhtS8TB+/SdLSNbrhD7JrOKXym0vBg98eQzjurMqS7trUZ8NUS/OaDcmUax49gnTFOQSNAw98pIxYmusu5qPs/bcUxSHLv0QaMEtDMowRtWHHyucBgF+Ac9z5Ta4+54Yftjv5/J1bmJdXXlTACH6UmdLIbtdK/dEyzWokghXlIaS4Q/L1uEN/Aog4DuGE33Fs5PL+J/nHOEalO1o++mi/sxR3MIZfg5dxPPZ4w1N842HSQvFIM8eYGs/O/py0WBzSzPFDjOIxtMhp5hijeHZ2/IzF5HH8NmmxOKSYYwPn+HXScnFIMcdTPf4EmNrji8fbqV9x4bg+9Y8vHukwx+nmGFPk8VPjdHPMpjbH0hqnnWPl9TD540+NlHMMMsg3ZsdRi9PPsfL72X3e7MMxtMUhUs9xeC/99tc3rx9eH1OGJ4LjsUeaOH736NG7P5IWYgikh+NHV9ZDPP4zaUFiIy0c775fv9LF+vvdpIWJiZRwvPv4CoWUkZwSjg9piq8cJi1OPKSD43frgOP1d0kLFAvp4PivKxB/JS1QLBglze7DG1OOHzMcPx7DaiAxjCUadT9peZTdXf5Ec9YZjtdTxfF4YffDf4+Orn38m/0zx3EaQ5HxwGfXjq6FOPoIddm5wiJl3tv4YLfL8AnJ8MkhQ/H7ZAScAHy8doYjaC4eMb7bo4QkTD0+O7pGAT6DjsXjZAScAPxNc3wELS4IQlIWgowTPgCOP4MPKZKnlmJ4SDlW/jjssrz+fqrFw+MfwDH//I8/Dw8P/5wyfC78l6L4f0kLM6GgD71pkHFB6Fvkf5IWZXLx97WjEB/ZA2+KUeKfDx8+jJLh/wMhwMC2weWkAAAAAABJRU5ErkJggg=="
            className="profile-round-image"
          />
        </div>
        <div>
          <h3 className="company_name">Wipro Private Limited</h3>
        </div>
        <div className="container p-5" style={{top:'-50px',position:'relative'}}>
          <form class="needs-validation" novalidate>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationCustom01">First name</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  value="Mark"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="validationCustom02">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom02"
                  value="Otto"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationCustom03">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="validationCustom04">State</label>
                <select class="custom-select" id="validationCustom04" required>
                  <option selected disabled value="">
                    Choose...
                  </option>
                  <option>...</option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="validationCustom05">Zip</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                />
                <div class="invalid-feedback">Please provide a valid zip.</div>
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label class="form-check-label" for="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <button class="btn btn-primary" type="submit">
              Submit form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
